<script setup lang="ts">
import type { Hero } from '@/components/models';
import StyledButton from '@/components/StyledButton.vue';
import { useHeroes } from '@/services/hero.service';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { findHero, updateHero, deleteHero } = useHeroes();
const hero: Ref<Hero | null> = ref(null);

onMounted(() => {
  const heroId = Number(route.params.id);
  hero.value = findHero(heroId);
});

const remove = () => {
  if (hero.value === null) return;
  deleteHero(hero.value).then(() => {
    router.go(-1);
  });
};

const save = () => {
  if (hero.value === null) return;
  updateHero(hero.value).then(() => {
    router.go(-1);
  });
};
</script>

<template>
  <template v-if="hero">
    <div class="title">{{ hero.name }} details!</div>

    <div>id: {{ hero.number }}</div>
    <div>name: <input v-model="hero.name" /></div>

    <div class="buttons">
      <StyledButton @click="router.go(-1)">Back</StyledButton>
      <StyledButton :type="'primary'" @click="save()"> Save </StyledButton>
      <StyledButton :type="'negative'" @click="remove()"> Delete </StyledButton>
    </div>
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

.buttons {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
}
</style>
