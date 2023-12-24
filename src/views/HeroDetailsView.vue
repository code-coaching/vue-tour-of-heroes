<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import type { Hero } from '@/components/models';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const hero: Ref<Hero | null> = ref(null);
const heroes = [
  { number: 11, name: 'Mr. Nice' },
  { number: 12, name: 'Narco' },
  { number: 13, name: 'Bombasto' },
  { number: 14, name: 'Celeritas' },
  { number: 15, name: 'Magneta' },
  { number: 16, name: 'RubberMan' },
  { number: 17, name: 'Dynama' },
  { number: 18, name: 'Dr IQ' },
  { number: 19, name: 'Magma' },
  { number: 20, name: 'Tornado' }
];

onMounted(() => {
  const heroId = Number(route.params.id);
  hero.value = heroes.find((hero) => hero.number === heroId) ?? null;
});
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
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
