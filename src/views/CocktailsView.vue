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

        <span class="flex-1">
            <button @click="() => getDrinkAlcoholic()">Bebidas alcohólicas</button>
            <button @click="() => getDrinkNonAlcoholic()">Bebidas no alcohólicas</button>
        </span>
    </div>

    <hr/>

    <section>

        <li v-for="(cocktail, i) in cocktailList" :key="i">
            <h1>{{ cocktail.strDrink }} - Id: {{ cocktail.idDrink }}</h1>
            <img v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" alt=""/>
            <button @click="visible(cocktail.idDrink)">More info</button>
            <div v-if="isVisible">
                <li v-for="(data, j) in cocktailData" :key="j">
                    <p>Category: {{ data.strCategory }}</p>
                    <p>Type: {{ data.strAlcoholic }}</p>
                    <p>Instructions: {{ data.strInstructions }}</p>
                </li>
            </div> 
        </li>
    </section>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCocktailByName, getAlcoholic, getNonAlcoholic, getRandomCocktail, getInfoById } from "@/services/cocktail.service";

const cocktailList = ref([]);
const cocktailData = ref([])
const isVisible = ref(false);

function visible (id){
    isVisible.value = !isVisible.value
    getDrinkFromId(id)
}

const verCocktailAleatorio = async () =>{
   cocktailList.value = await getRandomCocktail()
   console.log(cocktailList.value)
}

const getDrinkAlcoholic = async () => {
    cocktailList.value = await getAlcoholic();
    console.log(cocktailList.value)
}

const getDrinkNonAlcoholic = async () => {
    cocktailList.value = await getNonAlcoholic();
    console.log(cocktailList.value)
}

const getDrinkFromId = async (id) => {
    cocktailData.value = await getInfoById(id);
    console.log(cocktailData.value)
    
}
 
const searchCocktailByName = async (name) => {
    cocktailList.value = await getCocktailByName(name);
    console.log(cocktailList.value)
}


</script>

<style scoped>

    li{
        list-style: none;
    }

</style>