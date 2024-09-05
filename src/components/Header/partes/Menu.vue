<script setup>
import { RouterLink } from 'vue-router'; // Importar o RouterLink para navegação interna

</script>
<template>
    <div
    class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
    id="mobile-menu-2"
  >
    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <li>
        <RouterLink
          :to="{name : 'home'}"
          class="block py-2 pl-3 pr-4 text-white bg-orange-700 rounded lg:bg-transparent lg:text-orange-700 lg:p-0 dark:text-white"
          aria-current="page"
        >
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink
         :to="{name : 'sobre'}"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          Quem Somos
        </RouterLink>
      </li>
      <li>
        <RouterLink
           :to="{name : 'sobre'}"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
        Produtos
        </RouterLink>
      </li>
      <li>
        <RouterLink
            :to="{name : 'sobre'}"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          Servicos
        </RouterLink>
      </li>
      <li>
        <RouterLink
           :to="{name : 'sobre'}"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          Portfolio
        </RouterLink>
      </li>
      <li>
        <RouterLink
           :to="{name : 'sobre'}"
          class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
        >
          Contacto
        </RouterLink>
      </li>
    </ul>
  </div>
</template>