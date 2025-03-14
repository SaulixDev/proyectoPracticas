<template>
    <main class="static">
        <!-- Navegador de la página -->
        <nav class="p-1 bg-bg200 border-b-2 border-text100 sticky top-0 dark:bg-dbg200 dark:border-black">
            <!-- Navegador -->
            <div :class="`flex flex-col md:flex-row md:justify-evenly md:items-center md:flex`">
                <button class="hidden md:flex m-1 p-1 bg-primary100 rounded-md hover:bg-primary200 duration-300 dark:bg-dbg100 dark:hover:bg-dbg300" @click="() => goBack()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button
                    class="m-1 p-1 bg-primary100 rounded-md hover:bg-primary200 duration-300 dark:bg-dbg100 dark:hover:bg-dbg300"
                    @click="() => verCocktailAleatorio()">{{ $t(`message.bttn.new`) }}</button>
                <button
                    class="hidden md:flex m-1 p-1 bg-primary100 rounded-md hover:bg-primary200 duration-300 dark:bg-dbg100 dark:hover:bg-dbg300"
                    @click="() => showCategories()">{{ $t(`message.bttn.cat`) }}</button>
                <!-- Categorías, flex para móviles, absolute para ordenadores -->
                <span
                    class="hidden md:visible p-2 rounded-b-lg bg-accent200 text-text100 md:flex flex-col md:absolute top-[100%] right-[25%] dark:bg-daccent200"
                    v-if="showCat">
                    <div @click="() => getDrinkAlcoholic()" class="hover:bg-primary200 duration-100 border-b-1">
                        > {{ $t(`message.bttn.noAlc`) }}
                    </div>
                    <div @click="() => getDrinkNonAlcoholic()" class="hover:bg-primary200 duration-100">
                        > {{ $t(`message.bttn.noAlc`) }}
                    </div>
                    <div @click="() => getDrinksFromCategorie(cat.strCategory, 'nav')"
                        class="hover:bg-primary200 duration-100 border-t-1" v-for="(cat, i) in cocktailCat" :key="i">
                        <p>> {{ cat.strCategory }}</p>
                    </div>
                </span>
            </div>
        </nav>

        <!-- Input para buscar por nombre -->
        <div class="m-4 p-2 rounded-md bg-bg300 flex justify-center dark:bg-dbg200">
            <input :class="`m-2 w-[80%] border-r-1 border-text200 text-black dark:text-white`" type="text" v-model="searchWord"
                placeholder="Buscar Bebida" />
            <button @click="() => searchCocktailByName(searchWord)">{{ $t(`message.bttn.search`) }}</button>
        </div>

        <!-- Lista de categorías en la propia página -->
        <div class="text-center" v-if="showCatPage">
            <h1 class="pb-3 text-4xl font-extrabold border-b-2">Categorías</h1>
            <div class="p-7 grid grid-cols-2 gap-10">
                <div @click="() => getDrinksFromCategorie(cat.strCategory, 'page')"
                    class="p-10 hover:bg-bg200 dark:hover:bg-dbghover100 duration-100 border-1 rounded-2xl"
                    v-for="(cat, i) in cocktailCat" :key="i">
                    <p>{{ cat.strCategory }}</p>
                </div>
            </div>
        </div>

        <!-- Lista de los cockteles lanzados por la api -->
        <div class="m-2 p-2 rounded-lg bg-bg200 dark:bg-dbg200" v-for="(cocktail, i) in filterList" :key="i">
            <h1
                class="mb-2 text-center text-2xl font-bold font-title border-b-2 border-bg300 xl:text-4xl dark:border-black">
                {{ cocktail.strDrink }}<!--  - Id: {{ cocktail.idDrink }} --></h1>
            <div class="flex flex-col md:flex-row w-ful gap-4">
                <div class="p-3 w-full flex justify-center md:border-r-2 md:border-bg300 md:w-1/2 md:dark:border-black">
                    <img class="w-[80%] object-contain 2xl:w-[60%]" v-if="cocktail.strDrinkThumb"
                        :src="cocktail.strDrinkThumb" alt="" />
                </div>
                <div class="px-12 p-4 w-full md:w-1/2">
                    <div class="mb-3 flex justify-center">
                        <button
                            class="mr-5 bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300 dark:bg-dbg100 dark:hover:bg-dbg300"
                            @click="() => getDrinkFromId(cocktail.idDrink)">{{ $t(`message.info.more`) }}</button>
                        <button
                            class="mr-5 bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300 dark:bg-dbg100 dark:hover:bg-dbg300"
                            @click="() => lessInfo()">{{ $t(`message.info.less`) }}</button>
                        <button
                            class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300 dark:bg-dbg100 dark:hover:bg-dbg300"
                            @click="() => addToFavorites(cocktail.idDrink)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </button>
                    </div>
                    <CocktailInfo :id="cocktail.idDrink" />
                </div>
            </div>
        </div>

        <ScrollToTopButton />


    </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
    getCocktailByName,
    getAlcoholic,
    getNonAlcoholic,
    getRandomCocktail,
    getInfoById,
    getAllCategoria,
    getCategorie,
} from "@/services/cocktail.service";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
import { useCocktailStore } from "@/stores/cocktailStore";
import CocktailInfo from "@/components/CocktailInfo.vue";

//Variables de almacenamiento
const cocktailList = ref([]);
const cocktailData = ref([]);
const cocktailCat = ref([]);

const newName = ref('');
const searchWord = ref('');

const filterList = computed(() => {
    return (cocktailList.value || []).filter(cocktail =>
        String(cocktail.strDrink).toLowerCase().includes((searchWord.value || '').toLowerCase())
    );
});

const showCat = ref(false);
const showCatPage = ref(true);

//varibales del store
const store = useCocktailStore();
const { setCocktail, getDrinkInfoById } = store;

//Métodos para la página
const showCategoriesPage = () => {
    showCatPage.value = !showCatPage.value;
};

const goBack = () => {
    showCatPage.value = true;
    cocktailList.value = [];
    scrollToTop()
}

const showCategories = () => {
    showCat.value = !showCat.value;
}

const addToFavorites = (id) => {
    getDrinkInfoById(id)
}

//métodos del service de la api
const verCocktailAleatorio = async () => {
    cocktailList.value = await getRandomCocktail();
    if(showCatPage.value){
        showCategoriesPage()
    }
};

const getDrinkAlcoholic = async () => {
    cocktailList.value = await getAlcoholic();
    scrollToTop()
    showCategories()
};

const getDrinkNonAlcoholic = async () => {
    cocktailList.value = await getNonAlcoholic();
    scrollToTop()
    showCategories()
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const getDrinkFromId = async (id) => {
    cocktailData.value = await getInfoById(id);
    setCocktail(cocktailData.value);
};

const searchCocktailByName = async (name) => {
    cocktailList.value = await getCocktailByName(name);
};

const getAllCat = async () => {
    cocktailCat.value = await getAllCategoria();
};

const getDrinksFromCategorie = async (name, cat) => {
    cocktailList.value = await getCategorie(name);
    scrollToTop()
    if (cat === 'page') showCategoriesPage()
    else showCategories()

}

onMounted(() => {
    getAllCat();        
});

async function lessInfo() {
    setCocktail([]);
}
</script>

<style scoped>
img {
    border-radius: 20px;
}
</style>