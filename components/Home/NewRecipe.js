import React, {useContext} from 'react'
import axios from 'axios'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../data/Style'
  import { StateContext } from '../Context/StateContext';


const NewRecipe = () => {

  const currentUser = useContext(StateContext).currentUserObj[0]

  const getRecipe = () => {
    
  }

  return (
    <View style={styles.newRecipeWrapper}>
        <Text style={styles.newRecipeText}>Find a recipe for you</Text>
        <TouchableOpacity style={styles.newRecipeButton} onPress={getRecipe}> 
            <Text style={styles.ButtonText}>
                TEST INGREDIENTS
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    newRecipeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 12,
  },
  newRecipeText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    color: '#000'
  },
  newRecipeButton: {
    width: '80%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: theme.SECONDARY_COLOUR,
    borderRadius: 10,
    marginTop: 6
  },
  ButtonText: {
    textAlign: 'center',
    fontSize: 16
  }
  });

export default NewRecipe