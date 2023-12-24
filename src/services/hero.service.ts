import type { Hero } from '@/components/models';
import { computed, ref, toRaw, type Ref } from 'vue';

const heroes = ref([
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
]);

const selectedHero: Ref<null | Hero> = ref(null);

const useHeroes = () => {
  const topHeroes = computed(() => {
    return heroes.value.slice(-4);
  });

  const findHero = (heroId: number) => {
    const matchingHero = heroes.value.find((hero) => hero.number === heroId) ?? null;
    return structuredClone(toRaw(matchingHero));
  };

  const updateHero = (hero: Hero) => {
    const index = heroes.value.findIndex((h) => h.number === hero.number);
    if (index !== -1) {
      heroes.value[index] = structuredClone(toRaw(hero));
    }
  };

  const deleteHero = (hero: Hero) => {
    heroes.value = heroes.value.filter((h) => h.number !== hero.number);
    if (selectedHero.value?.number === hero.number) {
      selectedHero.value = null;
    }
  };

  const addHero = (name: string) => {
    const maxNumber = Math.max(...heroes.value.map((h) => h.number));
    const newHero = { number: maxNumber + 1, name } satisfies Hero;
    heroes.value.push(newHero);
  };

  return {
    heroes,
    selectedHero,
    topHeroes,
    findHero,
    updateHero,
    deleteHero,
    addHero
  };
};

export { useHeroes };
