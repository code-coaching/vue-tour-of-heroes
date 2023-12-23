import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: 'heroes',
          name: 'hero-list',
          component: () => import('@/views/HeroListView.vue')
        },
        {
          path: 'heroes/:id',
          name: 'hero-details',
          component: () => import('@/views/HeroDetailsView.vue')
        }
      ]
    }
  ]
});

export default router;
