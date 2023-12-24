<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { ref, type Ref } from 'vue';

interface Hero {
  number: number;
  name: string;
}

const hero: Ref<Hero | null> = ref({ number: 15, name: 'Magneta' });
</script>

<template>
  <template v-if="hero">
    <div class="title">{{ hero.name }} details!</div>

    <div>id: {{ hero.number }}</div>
    <div>name: <input :value="hero.name" /></div>

    <StyledButton>Back</StyledButton>
  </template>
</template>

<style scoped>
.title {
  font-size: 1.5rem;
  color: grey;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
