<template >
    <main
      class="h-screen mb-10 bg-center bg-no-repeat bg-cover bg-[url('src/assets/gatosFondo.webp')] bg-dtext200 dark:bg-gray-700 bg-blend-multiply">
      <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We
          Meals & Cocktails</h1>
        <p class="mb-[18%] text-lg font-bold text-white lg:text-xl sm:px-16 lg:px-48">
          {{$t(`message.home.slang`)}}
        </p>
        
      </div>
    </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'

</script>