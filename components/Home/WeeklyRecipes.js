import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import CategoryButton from '../Ingredients/CategoryButton';
import theme from '../../data/Style'

const WeeklyRecipes = () => {

  return (
    <View style={{marginTop: 24}}>
      <Text style={styles.UpcomingTitle}>Recipe Calendar</Text>
      <View style={styles.UpcomingRecipesWrapper}>
        <CategoryButton 
          text={'Weekly Recipe Schedule'} 
          icon={require('../../Images/Settings.png')} 
          colour={theme.SECONDARY_COLOUR} 
          wrapperStyle={{paddingHorizontal: 24, paddingVertical: 16, width: '60%'}}
          textStyle={{fontSize: 12}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  UpcomingRecipesWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  UpcomingTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 12,
  },
  nextRecipe: {
    textAlign: 'center'
  }
});

export default WeeklyRecipes