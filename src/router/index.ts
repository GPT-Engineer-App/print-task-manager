import { route } from 'quasar/wrappers';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export default route(function () {
  const createHistory = createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});