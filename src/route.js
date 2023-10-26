import { createRouter, createWebHistory } from 'vue-router';
import gaga from './components/links/ga-ga.vue';
import jiafei from './components/links/jia-fei.vue';
import ajiana from './components/links/ajian-na.vue'
import cupcake from './components/links/cup-cake.vue'
import deja from './components/links/deja-bulling.vue'
import jia_del_fey from './components/links/jia_del_fey.vue'

const routes = [
  { path: '/', component: gaga },
  { path: '/jiafei', component: jiafei },
  { path: '/ajiana', component: ajiana },
  { path: '/cupcake', component: cupcake },
  { path: '/deja', component: deja },
  {path:'/jiadel', component: jia_del_fey}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
