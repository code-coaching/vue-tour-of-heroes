<script setup lang="ts">
import { useAuth } from '@/services/auth.service';
import { ref } from 'vue';

const { login } = useAuth();

const email = ref('');
const password = ref('');
</script>

<template>
  <input type="email" v-model="email" />
  <input type="password" v-model="password" />
  <button @click="login(email, password)">Login</button>
</template>
