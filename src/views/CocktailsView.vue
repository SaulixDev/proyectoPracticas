<template>
    <main class="static ">
        <div class="bg-bg200 sticky top-0 ">
            <div class=" p-3 flex justify-evenly">
                <button class="m-1 bg-primary100 rounded-md p-1" @click="() => verCocktailAleatorio()">¿Buscas algo
                    nuevo?</button>
                <button class="m-1 bg-primary100 rounded-md p-1`" @click="() => showCategories()">Categorías</button>
            </div>

            <span class="bg-accent200 absolute right-0 md:right-[15%]" v-if="showCat">
                <div><button @click="() => getDrinkAlcoholic()">Bebidas alcohólicas</button></div>
                <div><button @click="() => getDrinkNonAlcoholic()">Bebidas no alcohólicas</button></div>
                <div v-for="(cat, i) in cocktailCat" :key="i">
                    <button @click="() => getDrinksFromCategorie(cat.strCategory)">{{ cat.strCategory }}</button>
                </div>
            </span>
        </div>

        <div class="m-4 p-2 rounded-md flex justify-center bg-bg300">
            <input :class="`m-2 w-[80%]`" type="text" v-model="newName" placeholder="Buscar Bebida" />
            <button @click="() => searchCocktailByName(newName)">Buscar</button>
        </div>



        <div class="m-2 p-2 bg-bg200 rounded-lg" v-for="(cocktail, i) in cocktailList" :key="i">
            <h1 class="text-center font-bold">{{ cocktail.strDrink }} - Id: {{ cocktail.idDrink }}</h1>
            <div class="flex flex-col md:flex-row w-ful gap-4" >
                <div class="p-4 w-full flex justify-center md:w-1/2">
                    <img class="w-[80%] object-contain" v-if="cocktail.strDrinkThumb" :src="cocktail.strDrinkThumb"
                        alt="" />
                </div>
                <div class="px-12 p-4 w-full md:w-1/2">
                    <div class="flex justify-center">
                        <button class="bg-primary100 rounded-md p-1 hover:bg-primary300"
                            @click="() => getDrinkFromId(cocktail.idDrink)">More info</button>
                        <button class="bg-primary100 rounded-md p-1 hover:bg-primary300" @click="() => lessInfo()">Less
                            info</button>
                    </div>
                    <CocktailInfo :id="cocktail.idDrink" />
                </div>
            </div>
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

const showCat = ref(false);

//varibales del store
const store = useCocktailStore();
const { setCocktail } = store;

const showCategories = async () => {
    showCat.value = !showCat.value;
}

//métodos del service de la api
const verCocktailAleatorio = async () => {
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

onMounted(() => {
    getAllCat();
})

async function lessInfo() {
    setCocktail([]) 
}


</script>

<style scoped>
img {
    border-radius: 20px;
}
</style>