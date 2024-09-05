<script setup>
import dashboard from "@/assets/img/dashboard.png";
import dashboard2 from "@/assets/img/dashboard2.png";
</script>
<template>
  <!-- Start block -->
  <section class="bg-gray-50 dark:bg-gray-800">
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
    >
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Soluções de Software Inteligentes
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            Maximize a eficiência com as soluções que você confia. Entregue um
            desempenho empresarial excepcional sem a complexidade dos sistemas
            ultrapassados. Simplifique operações essenciais, reduza tarefas
            manuais e implemente mudanças com facilidade.
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
          <p class="mb-8 font-light lg:text-xl">
            Transforme suas operações com tecnologia ágil e eficiente.
          </p>
        </div>
        <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          :src="dashboard"
          alt="dashboard feature image"
        />
      </div>
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          :src="dashboard2"
          alt="feature image 2"
        />
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Inovação e eficiência em todas as etapas do seu negócio.
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            Liberte o potencial da sua empresa com soluções tecnológicas
            completas. Explore o potencial ilimitado da tecnologia com nossas
            soluções inovadoras, projetadas para transformar e impulsionar seu
            negócio em todos os níveis.
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                >Websites Poderosos
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                >Sistemas de Gestão
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                >Aplicativos Web, Mobile e Desktop
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                >Soluções de Inteligência Artificial (IA)
              </span>
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
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
                >Integração com IoT
              </span>
            </li>
          </ul>
          <p class="font-light lg:text-xl">
            Inovação e tecnologia de ponta para transformar a gestão e o
            desempenho do seu negócio no mundo digital.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- End block -->
</template>
