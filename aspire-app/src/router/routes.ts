import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },
  {
    path: '/cards',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CardPage.vue') }],
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SettingPage.vue') }],
  },
  {
    path: '/payments',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PaymentPage.vue') }],
  },
  {
    path: '/credits',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CreditPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
