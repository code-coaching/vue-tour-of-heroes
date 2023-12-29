import type { Hero, HeroBackend } from '@/components/models';
import axios from 'axios';
import { computed, ref, type Ref } from 'vue';

const heroes: Ref<Array<Hero>> = ref([]);

const selectedHero: Ref<null | Hero> = ref(null);

const useHeroes = () => {
  const topHeroes = computed(() => {
    return heroes.value.slice(-4);
  });

  const findHero = (heroId: number) => {
    return axios
      .get<HeroBackend>(`https://code-coaching.dev/api/heroes/${heroId}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(
        // we onderscheppen de data die terugkomt van de API via .then()
        (res) => {
          const heroBackend = res.data;
          const hero = {
            number: heroBackend.id,
            name: heroBackend.name
          } satisfies Hero;
          // de data wordt omgevormd van een HeroBackend object naar een Hero object
          // vanaf dit punt bevat de Promise een Hero object
          // als we later .then() doen, dan krijgen we een Hero object
          return hero;
        }
      );
  };

  const updateHero = (hero: Hero) => {
    return axios
      .patch(
        `https://code-coaching.dev/api/heroes/${hero.number}`,
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
