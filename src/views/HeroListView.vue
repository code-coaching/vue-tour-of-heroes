<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import type { Hero } from '@/components/models';
import { useRouter } from 'vue-router';
import { useHeroes } from '@/services/hero.service';

const router = useRouter();

const { heroes, selectedHero } = useHeroes();

const onClickHero = (hero: Hero) => {
  selectedHero.value = hero;
};

const uppercase = (text: string) => text.toUpperCase();
</script>

<template>
  <div class="title">My Heroes</div>

  <div class="hero-list">
    <div
      v-for="(hero, index) in heroes"
      :key="index"
      @click="onClickHero(hero)"
      class="hero"
      :class="{
        'hero--active': hero.number === selectedHero?.number
      }"
    >
      <span class="hero-number">{{ hero.number }}</span>
      <span class="hero-name">{{ hero.name }}</span>
    </div>
  </div>

  <template v-if="selectedHero">
    <div class="title">{{ uppercase(selectedHero.name) }} is my hero</div>
    <StyledButton
      @click="router.push({ name: 'hero-details', params: { id: selectedHero?.number } })"
    >
      Details
    </StyledButton>
  </template>
</template>

<style scoped>
.title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.hero-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.hero {
  display: flex;
  max-width: 10rem;
  background-color: #e6e6e6;
  cursor: pointer;
  color: #8d8d8d;
  border-radius: 0.5rem;
}
.hero:hover {
  background-color: #cfd8dc;
  color: white;
  margin-left: 0.25rem;
}

.hero-number {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #5f7d8c;
  color: white;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
}
.hero-name {
  padding: 0.5rem;
  padding-left: 0.75rem;
  font-weight: 600;
}

.hero--active {
  background-color: #cfd8dc;
  color: white;
  margin-left: 0.25rem;
}
</style>
