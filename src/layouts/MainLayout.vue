<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="layout-container">
    <div class="title">Tour of Heroes</div>

    <div class="button-container">
      <button @click="router.push({ name: 'dashboard' })">Dashboard</button>
      <button @click="router.push({ name: 'hero-list' })">Heroes</button>
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

button {
  background-color: #eeeeee;
  border-radius: 0.25rem;
  font-weight: 500;
  border: none;
  padding: 0.25rem 0.5rem;
  color: #567868;
}

button:hover {
  background-color: #e6e6e6;
  color: #0096e8;
  cursor: pointer;
}
</style>
