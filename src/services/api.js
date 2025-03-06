import axios from 'axios';

export const apiMeal = axios.create({
    baseUrl: 'www.themealbd.com/api/json/v1/1'
})

export const apiCocktails = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

