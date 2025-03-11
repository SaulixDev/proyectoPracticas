<template>
    <main class="static">
        <!-- Cocktail -->
        <h1 class="text-center text-3xl font-title border-b-1 border-primary200">Cocktails</h1>
        <div class="mx-20 my-10 grid md:grid-cols-2 gap-4">
            <div v-if="favoriteDrinks.length === 0" class="col-span-2">
                <p class="text-center">{{$t(`message.fav.drink`)}}</p>
            </div>
            <div class="p-3 bg-bg200 rounded-lg md:flex flex-row" v-for="(fav, i) in favoriteDrinks" :key="i">
                <img class="mr-3 w-[40%] rounded-lg" v-if="fav.strDrinkThumb" :src="fav.strDrinkThumb" alt="" />
                <div>
                    <p class="mb-3 text-center text-xl font-title border-b-1 border-primary200"><b>{{ fav.strDrink }} -
                            {{ fav.idDrink }}</b></p>
                    <button class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300"
                        @click="() => deleteDrink(fav)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <h1 class="text-center text-3xl font-title border-b-1 border-primary200">{{$t(`message.nav.food`)}}</h1>
        <div class="mx-20 my-10 grid md:grid-cols-2 gap-4">
            <div v-if="favoriteDrinks.length === 0" class="col-span-2">
                <p class="text-center">{{$t(`message.fav.food`)}}</p>
            </div>
            <div class="p-3 bg-bg200 rounded-lg md:flex flex-row" v-for="(fav, i) in favoriteDrinks" :key="i">
                <p>En construcción</p>
            </div>
        </div>

        <div class="fixed bottom-7 right-6">
            <button
                class="mr-5 bg-primary100 rounded-md p-1 border-2 border-text100 hover:bg-primary200 duration-300 transition transition-discrete hover:-translate-y-2"
                @click="() => scrollToTop()">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>

    </main>
</template>

<script setup>
import { useCocktailStore } from '@/stores/cocktailStore';
import { storeToRefs } from 'pinia';


const store = useCocktailStore();
const { favoriteDrinks } = storeToRefs(store);
const { deleteDrink } = store

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped></style>