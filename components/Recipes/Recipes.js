import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../common/Header'
import SearchBarComp from '../common/SearchBarComp';
import Footer from '../common/Footer';
import TimePicker from './TimePicker';
import RecipeCardContainer from './RecipeCardContainer';
import TabBar from '../common/TabBar';
import theme from '../../data/Style'
import axios from 'axios';



const Recipes = () => {

  const [recipeList, setRecipeList] = useState([])

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

  useEffect(() => {
    fetch_recipes(14)
  }, [])
  

  const [ingredientTab, setIngredientTab] = useState(false);

  const titles = ["Available", "Missing Some"]

  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <ScrollView >
        <Header/>
        <TabBar ingredientTab={ingredientTab} setIngredientTab={setIngredientTab} titles={titles}/>
        <SearchBarComp placeholderText={"Search for a recipe"} searchList={[]} setFilteredList={() => {}}/>
        <TimePicker />
        {
          ingredientTab ? 
          <RecipeCardContainer title="Recipes You're Missing a Few Ingredients From" data={recipeList.slice(0,7)} ready={false}/>
          : 
          <RecipeCardContainer title="Recipes You Can Make Right Now" data={recipeList.slice(7,14)} ready={true}/>
          
        }
      </ScrollView>
      <Footer/>
    </View>
  )
}



export default Recipes