<script setup>
import "@/assets/css/output.css"; // Certificar-se que o CSS do Tailwind está a ser importado
import Botao from "./partes/Botao.vue";
import Logo from "./partes/Logo.vue";
import Menu from "./partes/Menu.vue";
</script>

<template>
  <header class="fixed w-full">
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div
        class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"
      >
        <Logo />
        <Botao />
        <Menu />
      </div>
    </nav>
  </header>
</template>
