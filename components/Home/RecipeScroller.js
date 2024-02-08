import React, {useState, useEffect} from 'react'
import {View, ScrollView} from 'react-native';
import ScrollCard from './ScrollCard';
import axios from 'axios';

const RecipeScroller = () => {
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    fetch_recipes(9)
  }, [])

  const fetch_recipes = async (recipeNum) => {
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
    
    setRecipeList(localRecipeList)
  }
  

  return (
    <View style={{marginTop: 24}}>
      <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
        <ScrollCard title={'20 minute recipes'} recipes={recipeList.slice(0,3)}/>
        <ScrollCard title={'Vegetarian'} recipes={recipeList.slice(3,6)}/>
        <ScrollCard title={'Popular'} recipes={recipeList.slice(6,9)}/>
      </ScrollView>
  </View>
  )
}
export default RecipeScroller