<script setup lang="ts">
import type { Hero } from '@/components/models';
import StyledButton from '@/components/StyledButton.vue';
import { useHeroes } from '@/services/hero.service';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { heroes } = useHeroes();
const hero: Ref<Hero | null> = ref(null);

onMounted(() => {
  const heroId = Number(route.params.id);
  hero.value = heroes.find((hero) => hero.number === heroId) ?? null;
});
</script>

<template>
  <template v-if="hero">
    <div class="title">{{ hero.name }} details!</div>

    <div>id: {{ hero.number }}</div>
    <div>name: <input v-model="hero.name" /></div>

    <StyledButton class="back-button" @click="router.go(-1)">Back</StyledButton>
  </template>
  <template v-else>
    <div class="title">Hero not found!</div>
  </template>
</template>

<style scoped>
.title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.back-button {
  margin-top: 1rem;
}
</style>
