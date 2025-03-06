import axios from 'axios';

const apiMeal = axios.create({
    baseUrl: 'www.themealbd.com/api/json/v1/1'
})