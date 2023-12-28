import type { Hero, HeroBackend } from '@/components/models';
import axios from 'axios';
import { computed, ref, toRaw, type Ref } from 'vue';

const heroes: Ref<Array<Hero>> = ref([]);

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
    saveHeroes();
  };

  const deleteHero = (hero: Hero) => {
    heroes.value = heroes.value.filter((h) => h.number !== hero.number);
    if (selectedHero.value?.number === hero.number) {
      selectedHero.value = null;
    }
    saveHeroes();
  };

  const addHero = (name: string) => {
    const maxNumber = Math.max(...heroes.value.map((h) => h.number));
    const newHero = { number: maxNumber + 1, name } satisfies Hero;
    heroes.value.push(newHero);
    saveHeroes();
  };

  const saveHeroes = () => {
    localStorage.setItem('heroes', JSON.stringify(heroes.value));
  };

  const loadHeroes = () => {
    axios
      .get<Array<HeroBackend>>('https://code-coaching.dev/api/heroes', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        heroes.value = res.data.map((heroBackend) => {
          const hero = {
            number: heroBackend.id,
            name: heroBackend.name
          } satisfies Hero;
          return hero;
        });
      });
  };

  return {
    heroes,
    selectedHero,
    topHeroes,
    findHero,
    updateHero,
    deleteHero,
    addHero,
    loadHeroes
  };
};

export { useHeroes };
