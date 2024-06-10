<script setup>
import { useTransactionStore } from '@/stores/tf';

const transactionStore = useTransactionStore();
const { data, transfer } = transactionStore;
</script>


<template>
    <v-card class="pa-12">
        <div class="transaction-form">

            <h2><b>Transaction Form</b></h2>
            
            <div class="transaction-form">
                    <label for="account_id">Account ID:</label>
                    <v-text-field type="varchar" v-model="data.account_id"></v-text-field>
            </div>

            <form @submit.prevent="transfer">
                <div class="transaction-form">
                    <label for="bank_id">Bank ID:</label>
                    <select v-model="data.bank_id" id="bank_id">
                        <option value="021">021 - BCA</option>
                        <option value="022">022 - HSBC</option>
                        <option value="023">023 - Mandiri</option>
                        <option value="023">024 - BNI</option>
                        <option value="023">025 - Mayapada</option>
                    </select>
                </div>

                <div class="transaction-form">
                    <label for="account_number">Account Number:</label>
                    <v-text-field type="numeric" v-model="account_number"></v-text-field>
                </div>

                <div class="transaction-form">
                    <label for="amount">Amount:</label>
                    <v-text-field type="number" v-model="data.amount"></v-text-field>
                </div>

                <div>
                    <v-btn @click="submit">SEND</v-btn>
                </div>
            </form>

            <!-- <v-snackbar v-model="data.snackbar">
            {{ data.pesanLogin }} -->

            <!-- <div v-if="submitted">
                <h3>Data Transaksi</h3>
                <p><strong>Account ID:</strong> {{ data.account_id }}</p>
                <p><strong>Bank ID:</strong> {{ data.bank_id }}</p>
                <p><strong>Amount:</strong> {{ amount }}</p>
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