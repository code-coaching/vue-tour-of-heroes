<script setup lang="ts">
import { useHeroes } from '@/services/hero.service';
const { topHeroes } = useHeroes();
</script>

<template>
  <div class="title">Top Heroes</div>

  <div class="top-heroes">
    <div v-for="(hero, index) in topHeroes" :key="index" class="top-hero">
      {{ hero.name }}
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.top-heroes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.top-hero {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #5f7d8c;
  color: white;

  height: 8rem;
  width: 10rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.top-hero:hover {
  background-color: #eeeeee;
  color: #5f7d8c;
  cursor: pointer;
}
</style>
