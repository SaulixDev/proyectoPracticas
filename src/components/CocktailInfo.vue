<template>
    <div>
        <div v-if="id===cocktailData[0]?.idDrink" v-for="(data, j) in cocktailData" :key="j">
            <p>Category: {{ data.strCategory }}</p>
            <p>Type: {{ data.strAlcoholic }}</p>
            <p>Instructions: {{ data.strInstructions }}</p> 
        </div>

    </div>
</template>

<script setup>
    import { getInfoById } from '@/services/cocktail.service';
    import { useCocktailStore } from '@/stores/cocktailStore';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    
    const store = useCocktailStore();
    const {  cocktail } = storeToRefs(store);

    defineProps ({
        id: String
    }) 
    
    const cocktailData = ref(cocktail);

    const getDrinkFromId = async (id) => {
        console.log(id)
        cocktailData.value = await getInfoById(id);
        console.log('ff', cocktailData.value)
    }

</script>

<style scoped>

</style>