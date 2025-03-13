import { defineStore } from "pinia";
import { apiCocktails } from "@/services/api";

export const useCocktailStore = defineStore('cocktail', {
    state: () => ({
        storeId: 13581,
        cocktail: '',
        favoriteDrinks: [],
    }),
    actions: {
        changeId(newId) {
            this.storeId = newId;
        },

        setCocktail(newDrink) {
            this.cocktail = newDrink;
        },

        deleteDrink(cocktail){
            var index = this.favoriteDrinks.indexOf(cocktail)
            this.favoriteDrinks.splice(index, 1)
        },

        async getDrinkInfoById(id) {
            try {
                const response = await apiCocktails.get(`/lookup.php?i=${id}`)
                const [data] = response.data.drinks
                this.favoriteDrinks.push(data)
            } catch (error) {
                console.log("Error no se pudo recoger el cocktaikl", error)
                return error;
            }
        }
    }
})