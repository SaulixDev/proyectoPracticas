<template>
    <div>
        <li v-if="id===mealData[0]?.idMeal" v-for="(data, j) in mealData" :key="j">
            <p>Category: {{ data.strCategory }}</p>
            <p>Zone: {{ data.strArea }}</p>
            <p>Instructions: {{ data.strInstructions }}</p>
            <p>Tags: {{ data.strTags }}</p> 
        </li>

    </div>
</template>

<script setup>
    import { getMealFromId } from '@/services/meal.service';
    import { useMenuStore } from '@/stores/menuStores';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';

    const store = useMenuStore();
    const {  menu } = storeToRefs(store);


    defineProps ({
        id: String
    }) 

    const mealData = ref(menu);

    const getMeals = async (id) => {
        console.log(id)
        mealData.value = await getMealFromId(id);
        console.log('ff', mealData.value)
    }

</script>

<style scoped>

</style>