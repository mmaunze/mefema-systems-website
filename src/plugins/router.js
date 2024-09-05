// Importando o módulo do Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Definindo cada rota como um objecto separado
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('@/views/Sobre/About.vue'),
  },
  // Rota para erro 404 - página não encontrada
  {
    path: '/:pathMatch(.*)*',
    name: 'nao-encontrado',
    component: () => import('@/Pages/404/NaoEncontrado.vue'), // Crie este componente na pasta de views
  },
];

// Criando o router com histórico de navegação
const router = createRouter({
  history: createWebHistory(),
  routes, // Array de rotas definidas
});

// Exportando o router para ser usado na aplicação
export default router;
