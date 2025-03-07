<template>
    <div>
    <button @click="() => verCocktailAleatorio()">Ver Cocktel aleatorio</button>
    <li v-for="(cocktail, i) in cocktailList">
        {{ cocktail.strDrink }}
    </li>
    </div>
    </template>
    <script setup>
    import { ref } from "vue";
    import { getRandomCocktail } from "@/services/cocktail.service";
    
    const cocktailList = ref([]);
    
    
    
    const verCocktailAleatorio = async () =>{
       cocktailList.value = await getRandomCocktail()
       console.log(cocktailList.value)
    }
    
    
    
    </script>
    <style scoped>
    </style>