import { defineStore } from "pinia";

export const useCocktailStore = defineStore('cocktail', {
    state: () => ({
        cocktailId: 13581,
    }),
    actions: {
        changeId(newId){
            return this.cocktailId = newId;
        }
    }
})