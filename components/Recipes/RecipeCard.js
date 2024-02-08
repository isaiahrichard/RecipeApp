import React, {useContext} from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { StateContext } from '../Context/StateContext';

const RecipeCard = ({recipe}) => {

    const imgSrc = require('../../Images/Ingredients.png')
    const [currentRecipe, setCurrentRecipe] = useContext(StateContext).curretnRecipeObj
    const navigation = useContext(StateContext).navigation

  return (
    <TouchableOpacity onPress={() => {setCurrentRecipe(recipe); navigation.navigate('recipepage')}}>
      <View style={styles.CardWrapper}>
          <Image
          source={imgSrc} 
          style={styles.CardImg}
          />
          <View style={[styles.CardTextWrapper]}>
              <Text style={styles.CardText}>{recipe.name}</Text>
          </View>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    CardTextWrapper: {
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    CardText:{
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '700',
      fontFamily: 'Poppins-Regular',
      borderRadius:7,
      paddingHorizontal: 7,
      paddingVertical: 4
    },
    CardWrapper: {
        height: 62,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        width: '100%',
        marginTop: 7
    },
    CardImg: {
        width: '100%',
        height: 62,
        borderRadius: 10
    }
  });

export default RecipeCard