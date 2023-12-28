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
    return axios
      .delete(`https://code-coaching.dev/api/heroes/${hero.number}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(() => {
        selectedHero.value = null;
      });
  };

  const addHero = (name: string) => {
    return axios.post(
      'https://code-coaching.dev/api/heroes', // end point
      { name }, // body
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      } // opties - hier voegen we de token toe aan de Authorization header
    );
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
