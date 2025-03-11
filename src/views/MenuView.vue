<template>
  <main class="bg-bg100 text-text100 p-4 static">
    <div class="flex flex-col sticky top-0 justify-left bg-bg100 border-b-1 md:border-b-0 md:relative">
      <div>
        <button @click="() => showNav()" class="md:hidden rounded">☰</button>
      </div>
      <div
       v-if="showMore"
       class="flex flex-col gap-1  mx-15 md:flex-row md:justify-center md:mx-0 md:bg-bg100 md:gap-5">
        <button
          @click="() => getRandomMea()"
          class="focus:outline-2 focus:outline-offset-2 bg-primary100"
        >
          ¿Buscas algo nuevo?
        </button>
        <button
          @click="() => getAllCat()"
          class="focus:outline-2 focus:outline-offset-2 bg-primary100"
        >
          Categorias
        </button>
        
      </div>
      <div
      v-if="cats" 
      class="bg-accent200 flex m-10 flex-col md:flex md:flex-col md:justify-center mb-0"
      >
      <button
        class="flex hover:bg-primary100"

        v-for="(category, i) in categories"
        @click="() => searchForCategorie(category.strCategory)"
      >
        {{ category.strCategory }}
      </button>
    </div>
    </div>
    <div class="bg-bg300 pl-8 mt-2 md:justify-center md:flex md:bg-bg100">
      <input
        type="text"
        placeholder="Sopa de verduras"
        v-model="menuName"
        class="md:bg-bg200"
      />
      <button
        @click="() => searchForName(menuName)"
        class="focus:outline-2 focus:outline-offset-2 focus:outline-text100 active:bg-accent100 ml-29 md:bg-primary100"
      >
        Buscar
      </button>
    </div>
    <div class="flex m-10 md:justify-center lg:justify-end">
      <div class="">
        <div class="">
          <div class="flex flex-col gap-1" v-for="(meal, i) in meals">
            <h1 class="text-center font-bold">{{ meal.strMeal }}</h1>
            <img v-if="meal.strMealThumb" :src="meal.strMealThumb" alt="" class="md:w-[50%]"/>
            <div>
              <button
                @click="() => searchForMeal(meal.idMeal)"
                class="bg-primary100 active:bg-accent100 ml-29 mr-25 mt-1 mb-3"
              >
                More Info
              </button>
              <MenuInfo :id="meal.idMeal" v-if="meal && meal.idMeal" />
              <button
                @click="() => lessInfo()"
                class="bg-primary100 active:bg-accent100 ml-29 mr-25 mt-1 mb-3"
              >
                Less info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import MenuInfo from "@/components/menuInfo.vue";
import {
  getAllCategories,
  getMealFromCategorie,
  getMealFromId,
  getRandomMeal,
  getMealFromName,
} from "@/services/meal.service";
import { useMenuStore } from "@/stores/menuStores";
import { onMounted, ref } from "vue";
const store = useMenuStore();
const meals = ref([]);
const categories = ref([]);
const { setMenu } = store;
const showMore = ref(true);
const cats = ref(false);

async function lessInfo() {
  setMenu([]);
}
const showCategories = () => {
  cats.value = !cats.value;
  console.log(cats.value);
};

async function getAllCat() {
    meals.value = [];
    categories.value = [];
    categories.value = await getAllCategories();
    showCategories() 
}

const showNav = () => {
  showMore.value = !showMore.value;
  console.log(showMore.value);
};

async function searchForMeal(id) {
  meals.value = [];
  categories.value = [];
  meals.value = await getMealFromId(id);
  setMenu(meals.value);
  console.log(meals.value);
}

async function searchForName(name) {
  meals.value = [];
  categories.value = [];
  meals.value = await getMealFromName(name);
  console.log(meals.value);
}

async function searchForCategorie(categorie) {
  meals.value = [];
  categories.value = [];
  meals.value = await getMealFromCategorie(categorie);
  console.log(meals.value);
}


async function getRandomMea() {
  meals.value = [];
  categories.value = [];
  meals.value = await getRandomMeal();
  console.log(meals.value);
}
/*onMounted(() => {
   getAllCategories();
 });*/
</script>

<style scoped></style>
