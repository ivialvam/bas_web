<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
// import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
// // import Piniyaa from './views/Piniyaa.vue';
// import { useCounterStore } from "../stores/counter"

const auth = useAuthStore()

// const data = reactive({
//   variable1 : 'test variable',
//   counter: 1,
//   variable2 : [1, 2, 3]

// })

// const tambahCounter = () => {
//   data.counter++
// }
</script>

<template>
  <header>
    <img class="logo" src="@/assets/ailogo.png" width="325" height="125" />

    <div class="wrapper">
      <!-- <Header :text="'Selamat datang,'"> -->
      <Header>
        <template #part1_header="{ param1 }">
          <h2>{{ param1 }}</h2>
        </template>
      </Header>

      <!-- {{ data.variable1 }} -->
      <HelloWorld msg="Dashboard" />

      <!-- <button @click="tambahCounter"> π </button>
      Player {{  data.counter }}
      <p>HoYoverse</p> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink v-if="!auth.isLoggedIn" to="/login">Login</RouterLink>
        <RouterLink  to="/trx">Transaction</RouterLink>
      </nav>
    </div>


  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(254, 228, 255);
  color: #CB6CE6
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  /* border: 0px solid rebeccapurple; */
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
/* slash | antar kata */
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid var(--color-border);
}
/* slash | paling kiri */
nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  /* jarak logo ke huruf */
  .logo { 
    margin: 1rem;
    margin-bottom: 32rem; /* Sesuaikan dengan kebutuhan */

  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;;
  }
/* ukuran tulisan */
  nav {
    text-align: left;
    margin-left: 1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
    margin-bottom: 20rem; 
  }
}
</style>