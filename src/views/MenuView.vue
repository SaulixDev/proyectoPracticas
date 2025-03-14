<template>
  <main class="bg-bg100 p-4 static dark:bg-dbg100">
    <section
      class="flex flex-col sticky top-0 justify-left pb-1 bg-bg100 md:relative dark:bg-dbg200 dark:border-black"
    >
      <div
        class="m-1 p-2 bg-bg300 flex justify-center dark:bg-dbg200 rounded-full"
      >
        <button
          @click="() => searchForName()"
          class="md:bg-primary100 md:dark:bg-dbg200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Buscar recetas..."
          v-model="menuFilter"
          class="m-2 w-[80%] border-text200 text-black dark:text-white"
        />
      </div>
      <div
        class="mt-3 mb-4 p-4 bg-bg300 flex justify-center dark:bg-dbg200 rounded-full gap-5"
      >
        <div>
          <button
            @click="() => getRandomMea()"
            class="dark:hover:bg-dbg300 dark:bg-dbg100 text-xl"
          >
            ¡RECETA AL AZAR!
          </button>
        </div>
        <div class="bg">
          <button @click="() => getRandomMea()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <h1
       class="text-2xl m-2"
       v-if="cats"
      >Categorías de Recetas</h1>
    </section>
    <section>
      <div class="grid grid-cols-2">
        <div
          v-if="cats"
          v-for="(cate, i) in categories"
          @click="() => searchForCategorie(cate.strCategory)"
          class="m-3 text-xl border-1 p-3 flex justify-center rounded-full"
        >
          {{ cate.strCategory }}
        </div>
      </div>
      <div
        class="m-2 p-2 rounded-lg bg-bg200 dark:bg-dbg200"
        v-for="(meal, i) in filteredMeals"
      >
        <div>
          <h1
            class="mb-2 text-center text-2xl font-bold font-title border-b-2 border-bg300 xl:text-4xl"
          >
            {{ meal.strMeal }}
          </h1>
        </div>
        <div class="grid grid-cols-2">
          <div class="md:border-r-2 md:border-bg300">
            <img
              v-if="meal.strMealThumb"
              :src="meal.strMealThumb"
              alt=""
              class="w-[80%] object-contain md:w-[50%] 2xl:w-[67%]"
            />
          </div>
          <div class="">
            <MenuInfo :data="meal?.data ? meal.data : meal" />
          </div>
        </div>
      </div>

    <ScrollToTopButton/>
  </main>
</template>

<script setup>
import MenuInfo from "@/components/menuInfo.vue";
import { useMenuStore } from "@/stores/menuStores";
import { computed, ref } from "vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
const store = useMenuStore();
const meals = computed(() => store.meals);
const categories = computed(() => store.categories);
const { setMenu } = store;
const showMore = ref(true);
const cats = ref(true);
const menuName = ref("");
const menuFilter = ref("");

const filteredMeals = computed(() => {
  return meals.value.filter((meal) =>
    meal.strMeal.toLowerCase().includes(menuFilter.value.toLowerCase())
  );
});

const {
  getAllCategories,
  getMealFromCategorie,
  getMealFromName,
  getRandomMeal,
} = store;

const showCategories = () => {
  cats.value = !cats.value;
};

async function getAllCat() {
  store.meals = [];
  await getAllCategories();
  showCategories();
  cats.value = !cats.value;
}

const showNav = () => {
  showMore.value = !showMore.value;
};

async function searchForName() {
  store.meals = [];
  store.categories = [];
  await getMealFromName(menuFilter.value);
  meals.value = store.meals;
}

async function searchForCategorie(categorie) {
  store.meals = [];
  store.categories = [];
  await getMealFromCategorie(categorie);
  meals.value = store.meals;
  cats.value = !cats.value;
}

async function getRandomMea() {
  meals.value = [];
  categories.value = [];
  meals.value = await getRandomMeal();
}
onMounted(() => {
  getAllCat();
});
</script>

<style scoped></style>
