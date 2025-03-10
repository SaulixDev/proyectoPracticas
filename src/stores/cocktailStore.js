import { defineStore } from "pinia";

export const useCocktailStore = defineStore('cocktail', {
    state: () => ({
        storeId: 13581,
        cocktail: '',
    }),
    actions: {
        changeId(newId){
            console.log(newId)
            this.storeId = newId;
        },

        setCocktail(newDrink){
            this.cocktail = newDrink;
        }
    }
})