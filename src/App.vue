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
            <RouterLink class="w-[30%] p-2 border-r-1 hover:bg-text200 rounded duration-300" to="/">Home</RouterLink>
            <RouterLink class="w-[30%] p-2 border-r-1 hover:bg-text200 rounded duration-300" to="/Menus">
              {{ $t(`message.nav.food`) }}</RouterLink>
            <RouterLink class="w-[30%] p-2 border-r-1 hover:bg-text200 rounded duration-300" to="/Cocktails">Cocktail
            </RouterLink>
            <RouterLink class="w-[30%] p-2 border-r-1 hover:bg-text200 rounded duration-300" to="/Favorites">
              {{ $t(`message.nav.fav`) }}</RouterLink>
            <div class="w-[30%] p-2 hover:bg-text200 rounded duration-300">
              <LanguageSwitch />
              <button @click="changeTheme()">ddd</button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <main class="z-30">
      <RouterView />

    </main>

    <footer
      class="collapse p-5 z-10 text-center flex justify-evenly bg-bg300 w-full fixed bottom-0 md:visible dark:bg-dbg300 dark:text-dtext100">
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
    localStorage.setItem("theme", "light");
  } else {
    theme.add("dark");     // Cambia a tema oscuro
    localStorage.setItem("theme", "dark");
  }
};
</script>

<style scoped></style>
