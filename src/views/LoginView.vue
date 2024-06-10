<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { inject, reactive } from 'vue';
import router from '@/router/index';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore()

const data = reactive({
    username: '',
    password: '',
    snackbar: false,
    pesanLogin:''
})

const myAxios = inject('myAxios')

const login = () => {
    console.log('login clicked', data);

    myAxios.post('/auth/login', {
        username: data.username,
        password: data.password
    }).then((res) => {
        if (res.status == 200) {
            data.pesanLogin ="Anda berhasil Login !!"
            auth.authenticated()
            router.push('user')
        }
        data.snackbar = true
    // eslint-disable-next-line no-unused-vars
    }, (err) => {
        data.pesanLogin = "Username atau Password salah"
        data.snackbar = true
    })
}

</script>

<template>

    <v-card class="pa-8">
        <div>
            <label>Username</label>
            <v-text-field type="username" v-model="data.username"> </v-text-field>
        </div>
        <div>
            <label>Password</label>
            <v-text-field type="password" v-model="data.password"></v-text-field>
        </div>
        <div>
            <v-btn @click="login"> Login </v-btn>
        </div>

        <v-snackbar v-model="data.snackbar">
            {{ data.pesanLogin }}

            <template v-slot:actions>
                <v-btn color="yellow" variant="text" @click="data.snackbar = false"> Close </v-btn>
            </template>
        </v-snackbar>
    </v-card>
</template>