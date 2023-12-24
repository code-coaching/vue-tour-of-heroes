import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
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
          path: 'heroes/add',
          name: 'hero-add',
          component: () => import('@/views/HeroAddView.vue')
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
