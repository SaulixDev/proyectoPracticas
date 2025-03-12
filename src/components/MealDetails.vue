<template>
  <div v-if="meal">
    <h1 class="text-center font-bold">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" alt="" />
    <p>Category: {{ meal.strCategory }}</p>
    <p>Zone: {{ meal.strArea }}</p>
    <p>Instructions: {{ meal.strInstructions }}</p>
    <p>Tags: {{ meal.strTags }}</p>
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
    console.log(route.params.id);
    const mealData = await store.getMealFromId(route.params.id);
    console.log(mealData);
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
