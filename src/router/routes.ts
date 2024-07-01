import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/main',
    component: () => import('pages/Main.vue'),
  },
];

export default routes;