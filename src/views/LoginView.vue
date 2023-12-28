<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { useAuth } from '@/services/auth.service';
import { ref } from 'vue';

const { login } = useAuth();

const email = ref('');
const password = ref('');

const authenticate = () => {
  login(email.value, password.value).then(() => {
    email.value = '';
    password.value = '';
  });
};
</script>

<template>
  <div class="login-container">
    <div class="login-fields">
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
    </div>
    <StyledButton @click="authenticate()">Login</StyledButton>
  </div>
</template>

<style scoped>
.login-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
}

.login-fields {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
