<template>
  <header>
    <div class="wrapper ">

      <nav class="p-4 bg-bg300 text-white">
        <div class="flex justify-between items-center">
          <h1 class="md:hidden">Restaurante</h1>
          <button @click="() => showNav()" class="md:hidden p-2 bg-text100 rounded">
            ☰
          </button>
        </div>
        
        <div :class="`flex flex-col md:flex-row md:justify-evenly md:items-center 
                    ${showMore ? 'block' : 'hidden'} md:flex`">
          <RouterLink class="p-2 hover:bg-text200 rounded duration-300" to="/">Home</RouterLink>
          <RouterLink class="p-2 hover:bg-text200 rounded duration-300" to="/Menus">{{$t(`message.nav.food`)}}</RouterLink>
          <RouterLink class="p-2 hover:bg-text200 rounded duration-300" to="/Cocktails">Cocktail</RouterLink>
          <RouterLink class="p-2 hover:bg-text200 rounded duration-300" to="/Deserts">Deserts</RouterLink>
          <RouterLink class="p-2 hover:bg-text200 rounded duration-300" to="/Favorites">{{$t(`message.nav.fav`)}}</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const showMore = ref(false);

const showNav = () => {
  showMore.value = !showMore.value
  console.log(showMore.value)
}
</script>

<style scoped>

</style>
