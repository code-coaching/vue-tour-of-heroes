<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { useAuth } from '@/services/auth.service';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();
const { logout, isAuthenticated } = useAuth();

</script>

<template>
  <div class="header">
    <StyledButton v-if="isAuthenticated" @click="logout()">Logout</StyledButton>
    <StyledButton v-if="!isAuthenticated" @click="router.push({ name: 'login' })">Login</StyledButton>
  </div>
  <div class="layout-container">
    <div class="title">Tour of Heroes</div>

    <div class="button-container">
      <StyledButton @click="router.push({ name: 'dashboard' })">Dashboard</StyledButton>
      <StyledButton @click="router.push({ name: 'hero-list' })">Heroes</StyledButton>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.layout-container {
  margin: 2rem;
}

.button-container {
  display: flex;
  gap: 0.25rem;
}

.header {
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  background-color: #333;
}
</style>
