<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div>Tour of Heroes</div>
  <button @click="router.push({ name: 'dashboard' })">Dashboard</button>
  <button @click="router.push({ name: 'hero-list' })">Heroes</button>

  <RouterView />
</template>
