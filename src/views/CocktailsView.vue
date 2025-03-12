<template>
  <main :class="`static`">
    <!-- Navegador de la página -->
    <nav class="p-1 bg-bg200 border-b-2 border-text100 sticky top-0">
      <!-- Icon para los dispositivos móviles -->
      <div class="flex justify-between items-center">
        <button
          @click="() => showNav()"
          class="m-[10px] p-2 rounded bg-text100 text-white md:hidden"
        >
          ☰
        </button>
        <h1 class="m-4 text-text100 text-xl md:hidden">More</h1>
      </div>
      <!-- Navehador -->
      <div
        :class="`flex flex-col md:flex-row md:justify-evenly md:items-center 
                    ${showMore ? 'block' : 'hidden'} md:flex`"
      >
        <button
          class="m-1 p-1 bg-primary100 rounded-md hover:bg-primary200 duration-300"
          @click="() => verCocktailAleatorio()"
        >
          ¿Buscas algo nuevo?
        </button>
        <button
          class="m-1 p-1 bg-primary100 rounded-md hover:bg-primary200 duration-300"
          @click="() => showCategories()"
        >
          Categorías
        </button>
        <!-- Categorías, flex para móviles, absolute para ordenadores -->
        <span
          class="p-2 rounded-b-lg bg-accent200 text-text100 flex flex-col md:absolute top-[100%] right-[25%]"
          v-if="showCat"
        >
          <div class="hover:bg-primary200 duration-100 border-b-1">
            <button @click="() => getDrinkAlcoholic()">
              > Bebidas alcohólicas
            </button>
          </div>
          <div class="hover:bg-primary200 duration-100">
            <button @click="() => getDrinkNonAlcoholic()">
              > Bebidas no alcohólicas
            </button>
          </div>
          <div
            class="hover:bg-primary200 duration-100 border-t-1"
            v-for="(cat, i) in cocktailCat"
            :key="i"
          >
            <button @click="() => getDrinksFromCategorie(cat.strCategory)">
              > {{ cat.strCategory }}
            </button>
          </div>
        </span>
      </div>
    </nav>

    <div class="m-4 p-2 rounded-md bg-bg300 flex justify-center">
      <input
        :class="`m-2 w-[80%] border-r-1 border-text200`"
        type="text"
        v-model="newName"
        placeholder="Buscar Bebida"
      />
      <button @click="() => searchCocktailByName(newName)">Buscar</button>
    </div>

    <div
      class="m-2 p-2 rounded-lg bg-bg200"
      v-for="(cocktail, i) in cocktailList"
      :key="i"
    >
      <h1
        class="mb-2 text-center text-2xl font-bold font-title border-b-2 border-bg300 xl:text-4xl"
      >
        {{ cocktail.strDrink
        }}<!--  - Id: {{ cocktail.idDrink }} -->
      </h1>
      <div class="flex flex-col md:flex-row w-ful gap-4">
        <div
          class="p-3 w-full flex justify-center md:border-r-2 md:border-bg300 md:w-1/2"
        >
          <img
            class="w-[80%] object-contain 2xl:w-[60%]"
            v-if="cocktail.strDrinkThumb"
            :src="cocktail.strDrinkThumb"
            alt=""
          />
        </div>
        <div class="px-12 p-4 w-full md:w-1/2">
          <div class="mb-3 flex justify-center">
            <button
              class="mr-5 bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300"
              @click="() => getDrinkFromId(cocktail.idDrink)"
            >
              Más info
            </button>
            <button
              class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300"
              @click="() => lessInfo()"
            >
              Menos info
            </button>
          </div>
          <CocktailInfo :id="cocktail.idDrink" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  getCocktailByName,
  getAlcoholic,
  getNonAlcoholic,
  getRandomCocktail,
  getInfoById,
  getAllCategoria,
  getCategorie,
} from "@/services/cocktail.service";
import { useCocktailStore } from "@/stores/cocktailStore";
import CocktailInfo from "@/components/CocktailInfo.vue";

//Variables de almacenamiento
const cocktailList = ref([]);
const cocktailData = ref([]);
const cocktailCat = ref([]);

const showCat = ref(false);
const showMore = ref(false);

//varibales del store
const store = useCocktailStore();
const { setCocktail } = store;

const showNav = () => {
  showMore.value = !showMore.value;
  console.log(showMore.value);
};

const showCategories = async () => {
  showCat.value = !showCat.value;
};

//métodos del service de la api
const verCocktailAleatorio = async () => {
  cocktailList.value = await getRandomCocktail();
};

const getDrinkAlcoholic = async () => {
  cocktailList.value = await getAlcoholic();
};

const getDrinkNonAlcoholic = async () => {
  cocktailList.value = await getNonAlcoholic();
};

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

const getDrinksFromCategorie = async (name) => {
  cocktailList.value = await getCategorie(name);
};

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
