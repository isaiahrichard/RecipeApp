import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Header from '../common/Header'
import SearchBarComp from '../common/SearchBarComp';
import Footer from '../common/Footer';
import TimePicker from './TimePicker';
import RecipeCardContainer from './RecipeCardContainer';
import TabBar from '../common/TabBar';
import theme from '../../data/Style'


const Recipes = ( {navigation} ) => {

  const [ingredientTab, setIngredientTab] = useState(false);
  const canMake = ["Hamburger", "Steak", "Pasta", "Chicken", "Tacos", "Mac and cheese", "Chicken Parmesean"]
  const almostCanMake = ["Salmon", "Grilled Cheese", "Tomato Soup", "Beef stew", "Pesto Chicken", "Fish tacos", "Shawarma"]

  const titles = ["Available", "Missing Some"]

  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <ScrollView >
        <Header/>
        <TabBar ingredientTab={ingredientTab} setIngredientTab={setIngredientTab} titles={titles}/>
        <SearchBarComp placeholderText={"Search for a recipe"}/>
        <TimePicker />
        {
          ingredientTab ? 
          <RecipeCardContainer title="Recipes You're Missing a Few Ingredients From" data={almostCanMake} ready={false}/>
          : 
          <RecipeCardContainer title="Recipes You Can Make Right Now" data={canMake} ready={true}/>
          
        }
      </ScrollView>
      <Footer navigation = {navigation}/>
    </View>
  )
}



export default Recipes