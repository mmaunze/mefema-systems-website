// src/main.js
import { createApp } from 'vue';
import '@/assets/css/output.css'; // Importação do CSS com Tailwind
import App from '@/App.vue';
import router from '@/plugins/router';

createApp(App).use(router).mount('#app');
