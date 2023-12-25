<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useHeroes } from './services/hero.service';

const { loadHeroes } = useHeroes();

onMounted(() => {
  loadHeroes();
});
</script>

<template>
  <RouterView />
</template>
