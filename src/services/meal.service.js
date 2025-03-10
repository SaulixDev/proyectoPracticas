import { apiMeal } from "./api";

export async function getMealFromId(id){
    try{
        const response = await apiMeal.get(`/lookup.php?i=${id}`)
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}

export async function getAllCategories(){
    try{
        let response = await apiMeal.get(`/list.php?c=list`)
        
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}

export async function getRandomMeal(){
    try{
        let response = await apiMeal.get(`/random.php`)
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}

export async function getMealFromCategorie(categorie){
    try{
        let response = await apiMeal.get(`/filter.php?c=${categorie}`)
        console.log(response.data.meals)
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}

export async function getListCategories(){
    try{
        let response = await apiMeal.get(`/list.php?c=list`)
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}

export async function getListArea(){
    try{
        let response = await apiMeal.get(`/list.php?a=list`)
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}

export async function getListIngredients(){
    try{
        let response = await apiMeal.get(`/list.php?i=list`)
        return response.data.meals
    }catch(error){
        console.error("Error al obtener la comida: ", error)
        return [];
    }
}