<template>
  <div class="bg-bg-100 text-text-100">
    <button @click="() =>getAllCat()">Mostrar categorias</button>
    <button @click="() => getRandomMea()">Plato aleatorio</button>
    <div>
        <li v-for="(category, i) in categories" @click="() => searchForCategorie(category.strCategory)">
            {{ category.strCategory }}></li>
            
    </div>
    <div>

      <li v-for="(meal, i) in meals">
        {{ meal.strMeal }}
        <img v-if="meal.strMealThumb" :src="meal.strMealThumb" alt="" />
        <button @click="() => searchForMeal(meal.idMeal)">More Info</button>
        <MenuInfo :id="meal.idMeal"/>
       
      </li>
    </div>
  </div>
</template>

<script setup>
import MenuInfo from "@/components/menuInfo.vue";
import {
  getAllCategories,
  getMealFromCategorie,
  getMealFromId,
  getRandomMeal,
  getListArea,
  getListIngredients,
} from "@/services/meal.service";
import { useMenuStore } from "@/stores/menuStores";
import { ref } from "vue";
const store = useMenuStore()
const meals = ref([]);
const categories = ref([]);
const ingredients = ref([]);
const zone = ref([]);
const { setMenu } = store

async function searchForMeal(id){
        meals.value=[]
        categories.value=[]
        meals.value  = await getMealFromId(id)
        setMenu(meals.value)
        console.log(meals.value)
    }

async function searchForCategorie(categorie) {
    meals.value=[]
    categories.value=[]
    meals.value = await getMealFromCategorie(categorie);
  console.log(meals.value);
}

async function getAllCat(){
    meals.value=[]    
    categories.value=[]
    categories.value = await getAllCategories()
        console.log(categories)
    }

async function getRandomMea() {
    meals.value=[]
    categories.value=[]
    meals.value = await getRandomMeal();
  console.log(meals.value);
}


</script>

<style scoped></style>
