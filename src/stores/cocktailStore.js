import { defineStore } from "pinia";

export const useCocktailStore = defineStore('cocktail', {
    state: () => ({
        id: 13581,
    }),
    actions: {
        changeId(newId){
            console.log(newId)
            return this.id = newId;
        }
    }
})