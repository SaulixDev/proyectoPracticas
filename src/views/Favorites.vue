<template>
    <main class="static">
        <!-- Cocktail -->
        <h1 class="text-center text-3xl font-title border-b-1 border-primary200">Cocktails</h1>
        <div class="mx-20 my-10 grid md:grid-cols-2 gap-4">
            <div v-if="favoriteDrinks.length === 0" class="col-span-2">
                <p class="text-center">{{$t(`message.fav.drink`)}}</p>
            </div>
            <div class="entrybg .dark p-3 bg-bg200 rounded-lg md:flex flex-row" v-for="(fav, i) in favoriteDrinks" :key="i">
                <img class="mr-3 w-[40%] rounded-lg hover:scale-105 duration-500" v-if="fav.strDrinkThumb" :src="fav.strDrinkThumb" alt="" />
                <div>
                    <p class="mb-3 text-center text-xl font-title border-b-1 border-primary200"><b>{{ fav.strDrink }} -
                            {{ fav.idDrink }}</b></p>
                    <button class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300 dark:bg-dbg300 dark:hover:bg-dbg100"
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
            <div v-if="favoriteMeals.length === 0" class="col-span-2">
                <p class="text-center">{{$t(`message.fav.food`)}}</p>
            </div>
            <div class="entrybg p-3 bg-bg200 rounded-lg md:flex flex-row" v-for="(fav, i) in favoriteMeals" :key="i">
                <img class="mr-3 w-[40%] rounded-lg hover:scale-105 duration-500" v-if="fav.strMealThumb" :src="fav.strMealThumb" alt="" />
                <div>
                    <p class="mb-3 text-center text-xl font-title border-b-1 border-primary200"><b>{{ fav.strMeal }} -
                            {{ fav.idMeal }}</b></p>
                    <button class="bg-primary100 rounded-md p-1 hover:bg-primary200 duration-300 dark:bg-dbg300 dark:hover:bg-dbg100"
                        @click="() => deleteMeal(fav)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="fixed bottom-7 right-6 z-30">
            <button
                class="mr-5 bg-primary100 rounded-md p-1 border-2 border-text100 hover:bg-primary200 duration-300 transition transition-discrete hover:-translate-y-2 dark:bg-dbg100 dark:border-black dark:hover:bg-dbg100"
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
import { useMenuStore } from '@/stores/menuStores';
import { storeToRefs } from 'pinia';


const dinkStore = useCocktailStore();
const { favoriteDrinks } = storeToRefs(dinkStore);
const { deleteDrink } = dinkStore

const mealStore = useMenuStore();
const { favoriteMeals } = storeToRefs(mealStore);
const { deleteMeal } = mealStore;

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.entrybg{
    background-color: #ebebd2;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23f5f5dc' fill-opacity='1'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.dark .entrybg{
    background-color: #3a3a2f;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234a4a3f' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>