<script setup>
import dashboard3 from "@/assets/img/dashboard3.png";
import dashboard from "@/assets/img/dashboard.png";
</script>
<template>
  <!-- Start block -->
  <section class="bg-gray-50 dark:bg-gray-800">
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
    >
      <div class="items-center gap-8 lg:grid lg:grid-cols-1 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="text-center mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Soluções de Software Inteligentes
          </h2>

          <p class="font-light lg:text-xl">
            Maximize a eficiência com as soluções que você confia. Entregue um
            desempenho empresarial excepcional sem a complexidade dos sistemas
            ultrapassados. Simplifique operações essenciais, reduza tarefas
            manuais e implemente mudanças com facilidade.
          </p>
          <p class="mb-8 font-light lg:text-xl">
            Transforme suas operações com tecnologia ágil e eficiente.
          </p>
        </div>
      </div>
      <div class="items-center gap-8 lg:grid lg:grid-cols-3 xl:gap-16">
        <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          :src="dashboard3"
          alt="dashboard feature image"
        />
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Websites Modernos e Responsivos</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Sistemas de Gestão Personalizados</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Aplicativos Multi Plataformas</span
              >
            </li>
          </ul>
        </div>
        <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          :src="dashboard"
          alt="dashboard feature image"
        />
      </div>
    </div>
  </section>
  <!-- End block -->
</template>
