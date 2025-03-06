<template>
    <div>
        <li v-for="(cat, i) in categories" :key="i">
            {{ cat.strCategory }}
        </li>
        <input
            type="text"
            v-model="searchId"
            placeholder="Ingrese id"
        />
        <button @click="searchForMeal(searchId)">Buscar</button>

        <input
            type="text"
            v-model="searchCat"
            placeholder="Ingrese categoria"
        />
        <button @click="searchForCategorie(searchCat)">Buscar</button>

        <li v-for="(meal, i) in meals" :key="i">
            {{ meal.strMeal }}
            <button @click="">More Info</button>
        </li>
    </div>
</template>

<script setup>
    
    import { getAllCategories, getMealFromCategorie, getMealFromId } from '@/services/meal.service';
    import { onMounted, ref } from 'vue'; 

    const meals = ref({})
    const categories = ref({})
    

    async function searchForMeal(id){
        meals.value  = await getMealFromId(id)
        console.log(meals.value)
    }

    async function searchForCategorie(categorie){
        meals.value = await getMealFromCategorie(categorie)
        console.log(meals.value)
    }

    async function getAllCat(){
        categories.value = await getAllCategories()
        console.log(categories)
    }

    onMounted(() => {
        getAllCat();
        console.log('pipipi', categories)
    })

</script>

<style scoped>

</style>