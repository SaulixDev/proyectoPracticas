<template>
  <div class="relative h-screen">
    <header>
      <div class="wrapper">
        <nav class="p-4 bg-bg300 text-white dark:bg-dbg300">
          <div class="flex justify-between items-center">
            <h1 class="md:hidden">Restaurante</h1>
            <button @click="() => showNav()" class="md:hidden p-2 bg-text100 rounded">
              ☰
            </button>
          </div>

          <div :class="`flex flex-col text-center md:flex-row md:justify-evenly md:items-center 
                      ${showMore ? 'block' : 'hidden'} md:flex`">
            <RouterLink class="w-[30%] p-2 md:border-r-1 hover:bg-text200 rounded duration-300 dark:hover:bg-dbg200" to="/">Home</RouterLink>
            <RouterLink class="w-[30%] p-2 md:border-r-1 hover:bg-text200 rounded duration-300 dark:hover:bg-dbg200" to="/Menus">
              {{ $t(`message.nav.food`) }}</RouterLink>
            <RouterLink class="w-[30%] p-2 md:border-r-1 hover:bg-text200 rounded duration-300 dark:hover:bg-dbg200" to="/Cocktails">Cocktail
            </RouterLink>
            <RouterLink class="w-[30%] p-2 md:border-r-1 hover:bg-text200 rounded duration-300 dark:hover:bg-dbg200" to="/Favorites">
              {{ $t(`message.nav.fav`) }}</RouterLink>
            <div class="w-[30%] flex justify-evenly p-2 hover:bg-text200 rounded duration-300 dark:hover:bg-dbg200">
              <LanguageSwitch />
              <button @click="changeTheme()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path class="visible dark:collapse" stroke-linecap="round" stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                  <path class="collapse dark:visible" stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="z-30">
      <RouterView />

    </main>

    <footer
      class="collapse p-5 z-10 text-center flex justify-evenly bg-bg300 w-full md:visible dark:bg-dbg300 dark:text-dtext100">
      <div class="w-[30%] border-r-1">
        <p>Telf:34522345</p>
      </div>
      <div class="w-[30%] border-r-1">
        <p>Dirección: C/Algo N:X</p>
      </div>
      <div class="w-[30%]">
        <p>Iconos</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import LanguageSwitch from '@/components/LanguageSwitch.vue';

const showMore = ref(false);

const showNav = () => {
  showMore.value = !showMore.value;
};

const changeTheme = () => {
  const theme = document.documentElement.classList;
  if (theme.contains("dark")) {
    theme.remove("dark");  // Cambia a tema claro

  } else {
    theme.add("dark");     // Cambia a tema oscuro
    localStorage.setItem("theme", "dark");
  }
};
</script>

<style scoped></style>
