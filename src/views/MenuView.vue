<template>
  <main class="bg-bg100 text-text100 p-4 static text-text100">
    <div
      class="flex flex-col sticky top-0 justify-left pb-1 bg-bg100 border-b-2 border-text100 md:relative"
    >
      <div>
        <button
          @click="() => showNav()"
          class="m-[10px] p-2 rounded bg-text100 text-white md:hidden"
        >
          ☰
        </button>
      </div>
      <div
        v-if="showMore"
        class="flex flex-col gap-1 mx-15 md:flex-row md:justify-evenly md:items-center flex md:bg-bg100 md:gap-5"
      >
        <button
          @click="() => getRandomMea()"
          class="focus:outline-2 focus:outline-offset-2 bg-primary100"
        >
          {{$t(`message.bttn.new`)}}
        </button>
        <button @click="() => getAllCat()" class="focus:outline-2 focus:outline-offset-2 bg-primary100">
          {{$t(`message.bttn.cat`)}}
        </button>
      </div>
      <div
        v-if="cats"
        class="flex m-10 flex-col md:flex md:flex-col md:ml-[40%] md:mr-[53%] mb-0"
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
    <div class="m-4 p-2 rounded-md bg-bg300 flex justify-center">
      <input
        type="text"
        placeholder="Sopa de verduras"
        v-model="menuFilter"
        class="m-2 w-[80%] border-r-1 border-text200"
      />
      <button
        @click="() => searchForName()"
        class="focus:outline-2 focus:outline-offset-2 focus:outline-text100 active:bg-accent100 md:bg-primary100"
      >
        {{$t(`message.bttn.search`)}}
      </button>
    </div>

    <div class="m-2 p-2 rounded-lg bg-bg200" v-for="(meal, i) in filteredMeals">
      <h1
        class="mb-2 text-center text-2xl font-bold font-title border-b-2 border-bg300 xl:text-4xl"
      >
        {{ meal.strMeal }}
      </h1>
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

    <div class="fixed bottom-7 z-30 right-6">
      <button
        class="mr-5 bg-primary100 rounded-md p-1 border-2 border-text100 hover:bg-primary200 duration-300 transition transition-discrete hover:-translate-y-2"
        @click="() => scrollToTop()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </div>
  </main>
</template>

<script setup>
import MenuInfo from "@/components/menuInfo.vue";
import { useMenuStore } from "@/stores/menuStores";
import { computed, ref } from "vue";
const store = useMenuStore();
const meals = computed(() => store.meals);
const categories = computed(() => store.categories);
const { setMenu } = store;
const showMore = ref(true);
const cats = ref(false);
const menuName = ref("");
const menuFilter = ref("");

const filteredMeals = computed(() => {
  return meals.value.filter((meal) =>
    meal.strMeal.toLowerCase().includes(menuFilter.value.toLowerCase())
  );
});
console.log(filteredMeals);

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
}

const showNav = () => {
  showMore.value = !showMore.value;
  console.log(showMore.value);
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
  console.log(meals.value);
}
console.log(filteredMeals);

async function getRandomMea() {
  meals.value = [];
  categories.value = [];
  meals.value = await getRandomMeal();
}
</script>

<style scoped></style>
