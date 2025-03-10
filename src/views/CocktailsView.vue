<template>
    <main>
        <div class="bg-primary100 sticky top-0 ">
            <div class="flex justify-evenly">
                <span>
                    <h2>Buscar por nombre</h2>
                    <input
                        type="text"
                        v-model="newName"
                        placeholder="Nombre de la bebida"
                    />
                    <button @click="() => searchCocktailByName(newName)">Buscar</button>
                </span>
                <span>
                    <h2>¿Necesitas probar algo nuevo?</h2>
                    <button @click="() => verCocktailAleatorio()">Ver Cocktel aleatorio</button>
                </span>

                <span>
                    <button @click="() => getDrinkAlcoholic()">Bebidas alcohólicas</button>
                    <button @click="() => getDrinkNonAlcoholic()">Bebidas no alcohólicas</button>
                </span>

            </div>
            <div class="flex space-x-4">
                <div class="flex-1" v-for="(cat, i) in cocktailCat" :key="i">
                    <button  @click="() => getDrinksFromCategorie(cat.strCategory)">{{ cat.strCategory }}</button>
                </div>
            </div>

            <hr/>
        </div>
        

        <div>
            <li v-for="(cocktail, i) in cocktailList" :key="i">
                <div class="flex drink-container">
                    <div class="flex-1">
                        <img class="w-96 object-contain" v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb" alt=""/>
                    </div>
                    <div class="flex-1 ">
                        <h1>{{ cocktail.strDrink }} - Id: {{ cocktail.idDrink }}</h1>
                        <button @click="() => getDrinkFromId(cocktail.idDrink)">More info</button>
                        <CocktailInfo :id="cocktail.idDrink"/>
                    </div>
                </div>
            </li>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCocktailByName, getAlcoholic, getNonAlcoholic, getRandomCocktail, getInfoById, getAllCategoria, getCategorie } from "@/services/cocktail.service";
import { useCocktailStore } from "@/stores/cocktailStore";
import CocktailInfo from "@/components/CocktailInfo.vue";


//Variables de almacenamiento
const cocktailList = ref([]);
const cocktailData = ref([]);
const cocktailCat = ref([]);

//varibales del store
const store = useCocktailStore();
const { setCocktail } = store;

//métodos del service de la api
const verCocktailAleatorio = async () =>{
   cocktailList.value = await getRandomCocktail()
}

const getDrinkAlcoholic = async () => {
    cocktailList.value = await getAlcoholic();
}

const getDrinkNonAlcoholic = async () => {
    cocktailList.value = await getNonAlcoholic();
}

const getDrinkFromId = async (id) => {
    cocktailData.value = await getInfoById(id);
    setCocktail(cocktailData.value)
}
 
const searchCocktailByName = async (name) => {
    cocktailList.value = await getCocktailByName(name);
}

const getAllCat = async () => {
    cocktailCat.value = await getAllCategoria();
}

const getDrinksFromCategorie = async (name) => {
    cocktailList.value = await getCategorie(name);
}

onMounted (() => {
    getAllCat();
})


</script>

<style scoped>
    h1{
        font-size: 20px;
        font-style: bold;
    }
    li{
        list-style: none;
    }
    .drinknav{
        background-color: rgb(206, 185, 139);
    }
    .drink-container{
        margin: 10px;
        background-color: beige;
        border-radius: 40px;
    }

    img{
        border-radius: 40px;
    }

</style>