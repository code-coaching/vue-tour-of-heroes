<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
  axios
    .post<{ token: string }>('https://code-coaching.dev/api/token/login', {
      email: email.value,
      password: password.value
    })
    .then((res) => {
      console.log(res);
    });
};
</script>

<template>
  <input type="email" v-model="email" />
  <input type="password" v-model="password" />
  <button @click="login()">Login</button>
</template>
