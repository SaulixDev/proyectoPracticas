<template>
  <main class="bg-bg100 p-4 static dark:bg-dbg100">
    <section
      class="flex flex-col sticky top-0 justify-left pb-1 bg-bg100 md:relative dark:bg-dbg100 dark:border-black"
    >
      <div
        class="m-1 p-2 bg-bg300 flex justify-center dark:bg-dbg200 rounded-full"
      >
        <button
          @click="() => searchForName()"
          class=""
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
        @click="() => getRandomMea()"
        class="mt-3 mb-4 p-4 bg-bg300 flex justify-center dark:bg-dbg200 rounded-full gap-5"
      >
        <div>
          <button class="dark:bg-dbg200 text-xl">¡RECETA AL AZAR!</button>
        </div>
        <div class="bg">
          <button>
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
    </section>
    <section class="">
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
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="place-items-center">
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
      <button class="text-2xl m-2" @click="() => getAllCat()">
        Categorías de Recetas
      </button>
      <div class="grid grid-cols-2 md:grid-cols-3">
        <div
          v-for="(cate, i) in categories"
          @click="() => searchForCategorie(cate.strCategory)"
          class="m-3 text-xl border-1 flex justify-center rounded-3xl flex-col "
        >
          <img :src="images[i]" alt=""  class="rounded-3xl"/>
          <p class="flex justify-center mt-1 ">
            {{ cate.strCategory }}
          </p>
        </div>
      </div>
      <div></div>
    </section>
    <ScrollToTopButton />
  </main>
</template>

<script setup>
import MenuInfo from "@/components/menuInfo.vue";
import { useMenuStore } from "@/stores/menuStores";
import { computed, ref, onMounted } from "vue";
import ScrollToTopButton from "@/components/ScrollToTopButton.vue";
const store = useMenuStore();
const meals = computed(() => store.meals);
const categories = computed(() => store.categories);
const { setMenu } = store;
const menuFilter = ref("");
const images = ref([
  "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
  "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
  "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
  "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
  "https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg",
  "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
  "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
  "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
  "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
  "https://www.themealdb.com/images/media/meals/1548772327.jpg",
  "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
  "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
  "https://www.themealdb.com/images/media/meals/1520081754.jpg",
  "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
]);

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

async function getAllCat() {
  store.meals = [];
  filteredMeals.value = [];
  await getAllCategories();
  categories.value = store.categories;
}


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
}

async function getRandomMea() {
  meals.value = [];
  categories.value = [];
  meals.value = await getRandomMeal();
}
onMounted(() => {
  getAllCat();
  getRandomMeal();
});
</script>

<style scoped></style>
