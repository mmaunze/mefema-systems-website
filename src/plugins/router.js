import { createRouter, createWebHistory } from 'vue-router';

// Definindo cada rota como um objecto separado
const routes = [
  {
    path: '/', 
    name: 'home', 
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/sobre', 
    name: 'sobre', 
    component: () => import('@/views/Sobre/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
