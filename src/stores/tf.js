import { defineStore } from 'pinia';
import { ref, reactive, inject } from 'vue';

export const useTransactionStore = defineStore('transaction', () => {
  const myAxios = inject('myAxios');

  const data = reactive({
    account_id: '',
    bank_id: '',
    amount: null,
    snackbar: false,
    pesanTransaksi: ''
  });

  const submitted = ref(false);

  const submitForm = () => {
    submitted.value = true;
  };

  const transfer = async () => {
    try {
      const res = await myAxios.post('/auth/trx', {
        account_id: data.account_id,
        bank_id: data.bank_id,
        amount: data.amount
      });
      if (res.status === 200) {
        data.pesanTransaksi = "Transaksi berhasil!";
      } else {
        data.pesanTransaksi = "Transaksi gagal!";
      }
    } catch (err) {
      data.pesanTransaksi = "Transaksi gagal!";
    } finally {
      data.snackbar = true;
    }
  };

  return {
    data,
    submitted,
    submitForm,
    transfer
  };
});
