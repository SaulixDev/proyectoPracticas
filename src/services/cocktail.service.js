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

/* Método para obtener los Cocktails alcoholicos */
export async function getAlcoholic() {
  try {
    const response = await apiCocktails.get(`filter.php?a=Alcoholic`);
    return response.data.drinks
  } catch (error) {
    console.log("Error no se pudo recoger el cocktail", error);
    return error;
  }
}

/* Método para obtener los Cocktails no alcoholicos */
export async function getNonAlcoholic() {
  try {
    const response = await apiCocktails.get(`filter.php?a=Non_Alcoholic`);
    return response.data.drinks
  } catch (error) {
    console.log("Error no se pudo recoger el cocktail", error);
    return error;
  }
}

/* Método para obtener las bebidas "Ordinarias" */
export async function getCategorieOrdinary() {
  try {
    const response = await apiCocktails.get(`filter.php?c=Ordinary_Drink`);
  } catch (error) {
    console.log("Error no se pudo recoger el cocktail", error);
    return error;
  }
}

/* Método para obtener las bebidas "Cocktails" */
export async function getCategorie(name) {
  try {
    const response = await apiCocktails.get(`filter.php?c=${name}`);
  } catch (error) {
    console.log("Error no se pudo recoger el cocktail", error);
    return error;
  }
}

/* Método para obtener las bebbidas que usen vaso de cocktail*/
export async function getVasoCocktail() {
  try {
    const response = await apiCocktails.get(`filter.php?g=Cocktail_glass`);
  } catch (error) {
    console.log("Error no se pudo recoger el cocktail", error);
    return error;
  }
}

/* Método para obtener las bebidas que usen vaso de champagne*/
export async function getVasoChampagne() {
  try {
    const response = await apiCocktails.get(`filter.php?g=Champagne_flute`);
  } catch (error) {
    console.log("Error no se pudo recoger el cocktail", error);
    return error;
  }
}

/* Lista de las categorias */
export async function getAllCategoria() {
  try {
    let response = await apiCocktails.get(`/list.php?c=list`);
    return response.drinks;
  } catch (error) {
    console.log("Error a obtener la lista", error);
    return error;
  }
}

/* Lista de los Vasos */
export async function getAllVasos() {
  try {
    let response = await apiCocktails.get(`/list.php?g=list`);
    return response.drinks;
  } catch (error) {
    console.log("Error a obtener la lista", error);
    return error;
  }
}

/* Lista de todos los ingredientes */
export async function getAllIngredientes() {
  try {
    let response = await apiCocktails.get(`/list.php?i=list`);
    return response.drinks;
  } catch (error) {
    console.log("Error a obtener la lista", error);
    return error;
  }
}

/* Lista de los tipos de bebidas (con/sin/alcohol optimo */
export async function getAllTipoAlcohol() {
  try {
    let response = await apiCocktails.get(`/list.php?c=list`);
    return response.drinks;
  } catch (error) {
    console.log("Error a obtener la lista", error);
    return error;
  }
}
