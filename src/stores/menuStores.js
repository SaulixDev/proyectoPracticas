import { defineStore } from "pinia";
import { apiMeal } from "@/services/api";
import { apiMeal } from "@/services/api";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    menu: "",
    storeId: 12345,
    meals: [],
    categories: [],
    areas: [],
    ingredientexs: [],
    error: null,
  }),
  actions: {
    changeId(newId) {
      console.log(newId);
      this.storeId = newId;
    },

    setMenu(newMenu) {
      this.menu = newMenu;
    },

    async getMealFromId(id) {
      try {
        const response = await apiMeal.get(`/lookup.php?i=${id}`);
        console.log(response);
        this.meals = response.data.meals || [];
        return response.data.meals;
      } catch (error) {
        this.error = "Error al obtener la comida: " + error.message;
      }
    },

    async getMealFromName(name) {
      try {
        const response = await apiMeal.get(`/search.php?s=${name}`);
        this.meals = response.data.meals || [];
      } catch (error) {
        this.error = "Error al obtener la comida: " + error.message;
      }
    },

    async getAllCategories() {
      try {
        const response = await apiMeal.get(`/list.php?c=list`);
        this.categories = response.data.meals || [];
      } catch (error) {
        this.error = "Error al obtener las categorías: " + error.message;
      }
    },

    async getRandomMeal() {
      try {
        const response = await apiMeal.get(`/random.php`);
        this.meals = response.data.meals || [];
      } catch (error) {
        this.error = "Error al obtener la comida aleatoria: " + error.message;
      }
    },

    async getMealFromCategorie(categorie) {
      try {
        const response = await apiMeal.get(`/filter.php?c=${categorie}`);
        this.meals = response.data.meals || [];
      } catch (error) {
        this.error =
          "Error al obtener la comida por categoría: " + error.message;
      }
    },

    async getListCategories() {
      try {
        const response = await apiMeal.get(`/list.php?c=list`);
        this.categories = response.data.meals || [];
      } catch (error) {
        this.error = "Error al obtener las categorías: " + error.message;
      }
    },

    async getListArea() {
      try {
        const response = await apiMeal.get(`/list.php?a=list`);
        this.areas = response.data.meals || [];
      } catch (error) {
        this.error = "Error al obtener las áreas: " + error.message;
      }
    },

    async getListIngredients() {
      try {
        const response = await apiMeal.get(`/list.php?i=list`);
        this.ingredients = response.data.meals || [];
      } catch (error) {
        this.error = "Error al obtener los ingredientes: " + error.message;
      }
    },

    async getMealFromIngredient(ingredient) {
      try {
        const response = await apiMeal.get(`/filter.php?i=${ingredient}`);
        this.meals = response.data.meals || [];
      } catch (error) {
        this.error =
          "Error al obtener la comida por ingrediente: " + error.message;
      }
    },
  },

  getters: {
    allMeals(state) {
      return state.meals;
    },
    allCategories(state) {
      return state.categories;
    },
    allAreas(state) {
      return state.areas;
    },
    allIngredients(state) {
      return state.ingredients;
    },
    errorMessage(state) {
      return state.error;
    },
  },
});
