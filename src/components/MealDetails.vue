<template>
  <div v-if="meal" class="m-2 p-2 rounded-lg bg-bg200 md:text-lg">
    <h1
      class="mb-2 text-center text-2xl font-bold font-title border-b-2 border-bg300 xl:text-4xl"
    >
      {{ meal.strMeal }}
    </h1>
    <img
      :src="meal.strMealThumb"
      alt=""
      class="w-[80%] object-contain md:w-[50%] 2xl:w-[60%] md:2-[]"
    />
    <p class="pb-4 mt-3"><b>Category:</b> {{ meal.strCategory }}</p>
    <p class="pb-4"><b>Zone:</b> {{ meal.strArea }}</p>
    <p class="pb-4"><b>Instructions:</b> {{ meal.strInstructions }}</p>
    <p class="pb-4"><b>Tags:</b> {{ meal.strTags }}</p>
    <RouterLink
      class="bg-primary100 active:bg-accent100 ml-29 mr-25 mt-1 mb-3"
      to="/Menus"
      >Less info</RouterLink
    >
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMenuStore } from "@/stores/menuStores";
const store = useMenuStore();

const route = useRoute();
const meal = ref(null);

onMounted(async () => {
  try {
    const mealData = await store.getMealFromId(route.params.id);
    if (mealData && mealData.length > 0) {
      meal.value = mealData[0];
    } else {
      console.error("No se encontraron datos para esta comida.");
      meal.value = null;
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    meal.value = null;
  }
});
</script>

<style scoped></style>
