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
        <h2>{{ cocktail.strDrink }}</h2>
        <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" alt=""/>
        <button @click="getInfo(cocktail.idDrink)">More info</button>
        <div v-if="isVisible">
            <p>Categoría: {{ cocktail.strCayegory }}</p>
            <p>Contiene alcohol: {{ cocktail.strAlcoholic }}</p>
            <p>Instrucciones: {{ cocktail.strInstructions }}</p>
        </div>
    </li>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCocktailByName, getInfoById, getListByLetter, getRandomCocktail } from "@/services/cocktail.service";

const cocktailList = ref([]);
const cocktailData = ref([])
const isVisible = ref(true);

/*function visible (){
    isVisible.value = !isVisible.value
} */

const verCocktailAleatorio = async () =>{
   cocktailList.value = await getRandomCocktail()
   console.log(cocktailList.value)
}

const seatchByLetter = async (letter) => {
    cocktailList.value = await getListByLetter(letter)
    console.log(cocktailList.value)
}
 
const searchCocktailByName = async (name) => {
    cocktailList.value = await getCocktailByName(name);
    console.log(cocktailList.value)
}

const getInfo = async (id) => {
    cocktailData.value = await getInfoById(id)
    console.log(cocktailData.value)
}


</script>

<style scoped>
</style>