import { apiCocktails } from "./api"; 

/*  Método para obtener un Cocktail por el nombre */ 
export async function getCocktailByName(name){
    try{
        const response = await apiCocktails.get(`/search.php?s=${name}`)
        return response.data.drinks
    }catch(error){
        console.log("Error no se ha podido recoger el Cocktel", error)
        return error;
    }
}

/* Método para obtener un Cocktail aleatorio */
export async function getRandomCocktail(){
    try{
        const response = await apiCocktails.get(`/random.php`)
        console.log(response)
        return response.data.drinks
    }catch(error){
        console.log("Error no se ha podido recoger el Cocktel", error)
        return error;
    }
}

/* Método para obtener los Cocktails que empiezen con la letra */
export async function getListByLetter(letter){
    try{
        const response = await apiCocktails.get(`/search.php?f=${letter}`)
        return response.data.drinks;
    }catch(error){
        console.log("Error no se pudo recoger el cocktail", error)
        return error;
    }
}

/* Método para obtener los Cocktails que tengan el ingrediente */
export async function getIngredientsByName(name){
    try{
        const response = await apiCocktails.get(`/search.php?i=${name}`)
        return response.data.ingredients
    }catch(error){
        console.log("Error no se pudo recoger el cocktaikl", error)
        return error;
    }
}

export async function getInfoById(id){
    try{
        const response = await apiCocktails.get(`/lookup.php?i=${id}`)
        return response.data.drinks
    }catch(error){
        console.log("Error no se pudo recoger el cocktaikl", error)
        return error;
    }
}

