import { authenticationGuard } from '@/guards/authentication.guard';
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
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/DashboardView.vue')
        },
        {
          path: 'heroes',
          name: 'hero-list',
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/HeroListView.vue')
        },
        {
          path: 'heroes/add',
          name: 'hero-add',
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/HeroAddView.vue')
        },
        {
          path: 'heroes/:id',
          name: 'hero-details',
          beforeEnter: [authenticationGuard],
          component: () => import('@/views/HeroDetailsView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/LoginView.vue')
        }
      ]
    }
  ]
});

export default router;
