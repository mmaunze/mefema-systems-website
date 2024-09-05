<script setup>
import { RouterView } from "vue-router";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import "@/assets/css/output.css";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <!-- Transição entre rotas -->
      <transition
        name="fade"
        mode="out-in"
      >
        <RouterView />
      </transition>
    </main>
    <Footer />
  </div>
</template>
