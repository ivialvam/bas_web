<script setup>
import { useTransactionStore } from '@/stores/tf';
import { inject, reactive } from 'vue';
import { VNumberInput } from 'vuetify/lib/labs/components.mjs';

const transactionStore = useTransactionStore();
const { transfer } = transactionStore;

const data = reactive({
    Account_id: '',
    Bank_id: '',
    Amount: 0,
    snackbar: false,
    pesanLogin: ''
})

const myAxios = inject('myAxios')

const submit = () => {
    console.log('login clicked', data);

    myAxios.post('/transaction/transferbank', data).then((res) => {
        if (res.status == 200) {
            data.pesanLogin ="Anda berhasil submit"
           
        }
        data.snackbar = true
    // eslint-disable-next-line no-unused-vars
    }, (err) => {
        data.pesanLogin = "Anda gagal trx"
        data.snackbar = true
    })
}
</script>


<template>
    <v-card class="pa-12">
        <div class="transaction-form">

            <h2><b>Transaction Form</b></h2>
            
            <div class="transaction-form">
                    <label for="account_id">Account ID:</label>
                    <v-text-field type="varchar" v-model="data.Account_id"></v-text-field>
            </div>

            <form @submit.prevent="transfer">
                <div class="transaction-form">
                    <label for="bank_id">Bank ID:</label>
                    <select v-model="data.Bank_id" id="bank_id">
                        <option value="021">021 - BCA</option>
                        <option value="022">022 - HSBC</option>
                        <option value="023">023 - Mandiri</option>
                        <option value="023">024 - BNI</option>
                        <option value="023">025 - Mayapada</option>
                    </select>
                </div>


                <div class="transaction-form">
                    <label for="amount">Amount:</label>
                    <v-number-input type="number" v-model="data.Amount"></v-number-input>
                </div>

                <div>
                    <v-btn @click="submit">SEND</v-btn>
                </div>
            </form>
            
                <v-snackbar v-model="data.snackbar">
                    {{ data.pesanLogin }}
        
                    <template v-slot:actions>
                        <v-btn color="yellow" variant="text" @click="data.snackbar = false"> Close </v-btn>
                    </template>
                </v-snackbar>
            </div> -->
        </div>
    </v-card>
  </template>
  
<style scoped>
.transaksi-form {
    max-width: 400px;
    margin: 0 auto;
}
  
.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}
  
input,
select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
  
button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

.transaction-form label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
}
.transaction-form select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
}
</style>
