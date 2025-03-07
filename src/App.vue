<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Recommendations from './views/RecommendationsView.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Cocktails">Cocktails</RouterLink>
        <RouterLink to="/Menus">Menus</RouterLink>
        <RouterLink to="/Recommendations">Recommendations</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav { 
  width: 100%;
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
