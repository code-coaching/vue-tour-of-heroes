<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
import { useHeroes } from '@/services/hero.service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { addHero } = useHeroes();

const name = ref('');

const saveHero = () => {
  addHero(name.value).then(() => {
    router.go(-1);
  });
};
</script>

<template>
  <div class="title">Add hero</div>

  <div>name: <input v-model="name" /></div>

  <div class="buttons">
    <StyledButton @click="router.go(-1)">Back</StyledButton>
    <StyledButton :type="'primary'" @click="saveHero()"> Save </StyledButton>
  </div>
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
