<script setup>
import logo_laranja from "@/assets/img/logo.png";
import logo_azul from "@/assets/img/logo/azul.png";
import logo_vermelha from "@/assets/img/logo/vermelho.png";
import logo_verde from "@/assets/img/logo/verde.png";
import logo_cinza from "@/assets/img/logo/cinza.png";

</script>
<template>
  <!-- Start block -->
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-5 dark:text-gray-400"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center lg:justify-center"
        >
          <img :src="logo_laranja" alt="Mefema Systems" />
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center lg:justify-center"
        >
          <img :src="logo_azul" alt="Mefema Systems" />
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center lg:justify-center"
        >
          <img :src="logo_vermelha" alt="Mefema Systems" />
        </router-link>

        
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center lg:justify-center"
        >
          <img :src="logo_cinza" alt="Mefema Systems" />
        </router-link>
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center lg:justify-center"
        >
          <img :src="logo_laranja" alt="Mefema Systems" />
        </router-link>
      </div>
    </div>
  </section>
  <!-- End block -->
</template>
