import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Panier from '../views/Panier.vue';
import Admin from '../views/Admin.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/panier', name: 'Panier', component: Panier },
  { path: '/admin', name: 'Admin', component: Admin }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
