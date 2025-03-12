import { defineStore } from "pinia";
import { apiMeal } from "@/services/api";

export const useMenuStore = defineStore('menu', {
    state: () => ({
        storeId: 0,
        menu: '',
        favoriteMeals: [],
    }),
    actions: {
        changeId(newId){
            console.log(newId)
            this.storeId = newId;
        },

        setMenu(newMenu){
            this.menu = newMenu;
        },

        deleteMeal(menu){
            var index = this.favoriteMeals.indexOf(menu)
            this.favoriteMeals.splice(index, 1)
        },

        async getMealInfoById(id){
            try{
                const response = await apiMeal.get(`/lookup.php?i=${id}`)
                const [data] = response.data.meals
                this.favoriteMeals.push(data)
            }catch(error){
                console.log("Error no se pudo recoger la comida", error)
                return error;
            }
        }
    }
})