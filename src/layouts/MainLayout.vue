<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
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
.title {
  font-size: 1.5rem;
  color: grey;
  font-weight: bold;
}

.layout-container {
  margin: 2rem;
}

.button-container {
  display: flex;
  gap: 0.25rem;
}
</style>
