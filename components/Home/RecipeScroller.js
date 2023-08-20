import React from 'react'
import {View, ScrollView} from 'react-native';
import ScrollCard from './ScrollCard';

const RecipeScroller = () => {

  const recipes = ["Pesto Chicken", "Chicken Burger", "Stir fry"]
  const recipes1 = ["Pasta", "Tacos", "Fishsticks"]
  const recipes2 = ["Loaded potatoes", "Pizza", "Shawarma"]
  return (
    <View style={{marginTop: 24}}>
      <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
        <ScrollCard title={'20 minute recipes'} recipes={recipes}/>
        <ScrollCard title={'Vegetarian'} recipes={recipes1}/>
        <ScrollCard title={'Popular'} recipes={recipes2}/>
      </ScrollView>
  </View>
  )
}
export default RecipeScroller