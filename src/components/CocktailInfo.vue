<template>
    <div>
        <button @click="getInfo(cocktailId)">More info</button>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { getInfoById } from '@/services/cocktail.service';
    import { useCocktailStore } from '@/stores/cocktailStore';
    import { storeToRefs } from 'pinia';
    
    const cocktailData = ref([]);
    const store = useCocktailStore()
    const { cocktailId } = storeToRefs(store)

    const getInfo = async (id) => {
        cocktailData.value = await getInfoById(id)
        console.log(cocktailData.value)
        console.log(id)
    }

</script>

<style scoped>

</style>