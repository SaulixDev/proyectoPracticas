<template>
  <main class="bg-bg100 text-text100 p-4 static">
    <div class="flex flex-col sticky top-0 justify-left bg-bg100 border-b-1 md:border-b-0 md:relative">
      <div>
        <button @click="() => showNav()" class="md:hidden rounded">☰</button>
      </div>
      <div v-if="showMore"
        class="flex flex-col gap-1  mx-15 md:flex-row md:justify-center md:mx-0 md:bg-bg100 md:gap-5">
        <button @click="() => getRandomMea()" class="focus:outline-2 focus:outline-offset-2 bg-primary100">
          ¿Buscas algo nuevo?
        </button>
        <button @click="() => getAllCat()" class="focus:outline-2 focus:outline-offset-2 bg-primary100">
          Categorias
        </button>

      </div>
      <div v-if="cats" class="bg-accent200 flex m-10 flex-col md:flex md:flex-col md:justify-center mb-0">
        <button class="flex hover:bg-primary100" v-for="(category, i) in categories"
          @click="() => searchForCategorie(category.strCategory)">
          {{ category.strCategory }}
        </button>
      </div>
    </div>
    <div class="bg-bg300 pl-8 mt-2 md:justify-center md:flex md:bg-bg100">
      <input type="text" placeholder="Sopa de verduras" v-model="menuName" class="md:bg-bg200" />
      <button @click="() => searchForName(menuName)"
        class="focus:outline-2 focus:outline-offset-2 focus:outline-text100 active:bg-accent100 ml-29 md:bg-primary100">
        Buscar
      </button>
    </div>
    <div class="flex m-10 md:justify-center lg:justify-end">
      <div class="">
        <div class="">
          <div class="flex flex-col gap-1" v-for="(meal, i) in meals">
            <h1 class="text-center font-bold">{{ meal.strMeal }}</h1>
            <img v-if="meal.strMealThumb" :src="meal.strMealThumb" alt="" class="md:w-[50%]" />
            <div>
              <button @click="() => searchForMeal(meal.idMeal)"
                class="bg-primary100 active:bg-accent100 ml-29 mr-25 mt-1 mb-3">
                More Info
              </button>
              <MenuInfo :id="meal.idMeal" v-if="meal && meal.idMeal" />
              <button @click="() => lessInfo()" class="bg-primary100 active:bg-accent100 ml-29 mr-25 mt-1 mb-3">
                Less info
              </button>

              <button class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300"
                @click="() => addToFavorites(meal.idMeal)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-7 right-6">
            <button
                class="mr-5 bg-primary100 rounded-md p-1 border-2 border-text100 hover:bg-primary200 duration-300 transition transition-discrete hover:-translate-y-2"
                @click="() => scrollToTop()">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
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
const { setMenu, getMealInfoById } = store;
const showMore = ref(true);
const cats = ref(false);

async function lessInfo() {
  setMenu([]);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const showCategories = () => {
  cats.value = !cats.value;
  console.log(cats.value);
};

const addToFavorites = (id) => {
    console.log(id)
    getMealInfoById(id)
}

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
