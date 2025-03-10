<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper ">

      <nav>
        <p class="md:hidden">more</p>
        <div class="collapse flex flex-col md:visible flex-row justify-evenly">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/Cocktails">Cocktails</RouterLink>
          <RouterLink to="/Deserts">Deserts</RouterLink>
          <RouterLink to="/Menus">Menus</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
