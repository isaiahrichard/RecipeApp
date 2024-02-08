import axios from 'axios'

export const fetch_recipes = async (recipeNum) => {
    let localRecipeList = []
    await axios.get(`${global.API_URL}/recipes`, {
      params: {
          number: recipeNum
      }
      }).then(res => {
          if(res.status == '200'){
              console.log("Recipes found ")
              localRecipeList = res.data
    }})
    
    return localRecipeList
  }