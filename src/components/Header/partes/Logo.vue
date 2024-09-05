<script setup>
import logo from '@/assets/logo.png'; // Importar a imagem do logo corretamente
import { RouterLink } from 'vue-router'; // Importar o RouterLink para navegação interna

</script>
<template>
    <RouterLink to="/" class="flex items-center">
        <img :src="logo" class="h-6 mr-3 md:h-9" alt="Mefema Systems Logo" />
      </RouterLink>
</template>