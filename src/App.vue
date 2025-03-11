<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="bg-bg300">
    <div class="wrapper">

      <nav class="flex justify-around">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Cocktails">Cocktails</RouterLink>
        <RouterLink to="/Deserts">Deserts</RouterLink>
        <RouterLink to="/Menus">Menus</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
