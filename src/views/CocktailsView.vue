<template>
<div>
    <div class="flex space-x-4">
        <span class="flex-1">
                <h2>Buscar por nombre</h2>
            <input
                type="text"
                v-model="newName"
                placeholder="Nombre de la bebida"
            />
            <button @click="() => searchCocktailByName(newName)">Buscar</button>
        </span>
        <span class="flex-1">
            <h2>¿Necesitas probar algo nuevo?</h2>
            <button @click="() => verCocktailAleatorio()">Ver Cocktel aleatorio</button>
        </span>
    </div>

    <section>
        <li v-for="(cocktail, i) in cocktailList" :key="i">
            <h2>{{ cocktail.strDrink }}</h2>
            {{ cocktail.idDrink }}
            <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" alt=""/>
            <button @click="visible()">More info</button>
            <div v-if="isVisible">
                <p>Category: {{ cocktail.strCategory }}</p>
                <p>Type: {{ cocktail.strAlcoholic }}</p>
                <p>Instructions: {{ cocktail.strInstructions }}</p>
            </div> 
        </li>
    </section>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCocktailByName, getInfoById, getIngredientsByName, getListByLetter, getRandomCocktail } from "@/services/cocktail.service";

const cocktailList = ref([]);
const cocktailData = ref([]);
const cocktailIng = ref([])
const isVisible = ref(false);

function visible (){
    isVisible.value = !isVisible.value
}

const verCocktailAleatorio = async () =>{
   cocktailList.value = await getRandomCocktail()
   console.log(cocktailList.value)
}

const seatchByLetter = async (letter) => {
    cocktailList.value = await getListByLetter(letter)
    console.log(cocktailList.value)
}

const searchIngredientsByName = async (name) => {
    cocktailIng.value = await getIngredientsByName(name)
    console.log(cocktailIng.value)
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

    .searchPart{
        background-color: aqua;
    }

</style>