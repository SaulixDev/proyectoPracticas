<template>
<div>
    <input
        type="text"
        v-model="newName"
        placeholder="Iintroduzca Nombre"
    />
    <button @click="() => searchCocktailByName(newName)">Buscar</button>
    <button @click="() => verCocktailAleatorio()">Ver Cocktel aleatorio</button>
    <li v-for="(cocktail, i) in cocktailList" :key="i">
        {{ cocktail.strDrink }}
        <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" alt=""/>
        <button @click="searchCocktailIngredients(cocktail.strDrink)">More info</button>
        <div v-if="isVisible">
            <p>Contiene alcohol: {{ cocktail.strAlcohol }}</p>
        </div>
    </li>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCocktailByName, getIngredientsByName, getRandomCocktail } from "@/services/cocktail.service";

const cocktailList = ref([]);
const cocktailData = ref([])
const isVisible = ref(true);

function visible (){
    isVisible.value = !isVisible.value
}

const verCocktailAleatorio = async () =>{
   cocktailList.value = await getRandomCocktail()
   console.log(cocktailList.value)
}
 
const searchCocktailByName = async (name) => {
    cocktailList.value = await getCocktailByName(name);
    console.log(cocktailList.value)
}

const searchCocktailIngredients = async (ing) => {
    cocktailData.value = await getIngredientsByName(ing)
    console.log(cocktailData.value)
}


</script>

<style scoped>
</style>