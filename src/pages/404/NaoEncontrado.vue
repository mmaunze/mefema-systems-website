<script setup></script>
<template>
  <!-- Start block -->
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div class="max-w-screen-sm mx-auto text-center">
        <h2
          class="p-8 mt-8 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
        >
          Página Não Encontrada
        </h2>
        <p class="mb-8 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Desculpe, a página que você está tentando aceder não existe.
        </p>
        <RouterLink
          :to="{ name: 'home' }"
          class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
          >Voltar ao Inicio</RouterLink
        >
      </div>
    </div>
  </section>
  <!-- End block -->
</template>
