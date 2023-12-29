import type { Hero, HeroBackend } from '@/components/models';
import { computed, ref, type Ref } from 'vue';
import { useApi } from './api.service';

const { api } = useApi();

const heroes: Ref<Array<Hero>> = ref([]);

const selectedHero: Ref<null | Hero> = ref(null);

const useHeroes = () => {
  const topHeroes = computed(() => {
    return heroes.value.slice(-4);
  });

  const findHero = (heroId: number) => {
    return api
      .get<HeroBackend>(`/heroes/${heroId}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(
        (res) => {
          const heroBackend = res.data;
          const hero = {
            number: heroBackend.id,
            name: heroBackend.name
          } satisfies Hero;
    
          return hero;
        }
      );
  };

  const updateHero = (hero: Hero) => {
    return api
      .patch(
        `/heroes/${hero.number}`,
        {
          name: hero.name
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      .then(() => {
        selectedHero.value = null;
      });
  };

  const deleteHero = (hero: Hero) => {
    return api
      .delete(`/heroes/${hero.number}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(() => {
        selectedHero.value = null;
      });
  };

  const addHero = (name: string) => {
    return api.post(
      '/heroes',
      { name }, 
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      } 
    );
  };

  const loadHeroes = () => {
    api
      .get<Array<HeroBackend>>('/heroes', {
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
