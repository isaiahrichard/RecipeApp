import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import Header from '../common/Header'
import Footer from '../common/Footer';
import WeeklyRecipes from './WeeklyRecipes';
import RecipeScroller from './RecipeScroller';
import RecipeCarosuelCard from '../Recipes/RecipeCarosuelCard';
import NewRecipe from './NewRecipe';
import theme from '../../data/Style'

const HomePage = ( {navigation} ) => {
  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
    <ScrollView>
      <Header/>
      <NewRecipe />
      <WeeklyRecipes/>
      <RecipeScroller/>
      <View style={{marginTop: 24}}>
        <Text style={styles.RecipeScrollTitle}>Previous Recipes</Text>
        <View style={styles.RecipeScroll}>  
          <RecipeCarosuelCard recipeName={'Chicken'}/>
          <RecipeCarosuelCard recipeName={'Tacos'}/>
          <RecipeCarosuelCard recipeName={'Pasta'}/>
        </View>
      </View>
    </ScrollView>
    <Footer navigation = {navigation}/>
  </View>
  )
}

const styles = StyleSheet.create({
  RecipeScrollTitle: {
    marginTop: 6,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 18
  },
  RecipeScroll: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 6,
    justifyContent: 'space-around'
  }
})
export default HomePage