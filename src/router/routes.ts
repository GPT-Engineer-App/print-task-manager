import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/',
    component: () => import('pages/Main.vue'),
  },
];

export default routes;