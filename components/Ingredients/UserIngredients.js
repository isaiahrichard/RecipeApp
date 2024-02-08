import React, {useContext} from 'react'
import theme from '../../data/Style'
import IngredientTile from './IngredientTile';
import { StateContext } from '../Context/StateContext';
import { SearchContext } from '../Context/SearchContext';
import {View, StyleSheet, ScrollView, TouchableOpacity, Text, Image} from 'react-native';


const UserIngredients = () => {

  const currentUser = useContext(StateContext).currentUserObj[0]
  const {searchStateObj} = useContext(SearchContext);

  return (
    <ScrollView >
    <View style={styles.UserIngredients}>
        {currentUser.ingredients.length ?
        <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
          <Text style={styles.CardTitle}>Your Favourite Ingredients</Text> 
          <View style={styles.ButtonContainer}>
              {currentUser.ingredients.slice(0,8).map((ingredient, index) => {
                  return <View style={{width: '47%', marginBottom: 12}} key={index}>
                              <IngredientTile title={ingredient}/>
                          </View>
              })}
          </View>
          <TouchableOpacity style={styles.PantryButtonWrapper}>
            <Text style={styles.PantryButtonText}>See your full pantry</Text>
          </TouchableOpacity> 
        </View>
        :
        <View style={styles.EmptyPantryWrapper}>
          <Text style={styles.EmptyPantryHeader}>Your pantry is empty</Text>
          <Image source={require('../../Images/pantry.png')} style={styles.EmptyPantryIcon}/>

          <TouchableOpacity style={[styles.PantryButtonWrapper, styles.EmptyPantryButton]} onPress={() => searchStateObj[1](true)}>
            <Text style={[styles.PantryButtonText, styles.EmptyPantryButtonText]}>Add ingredients</Text>
          </TouchableOpacity> 
        </View> }
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    UserIngredients:{
        marginHorizontal: 12,
        marginTop: 5,
        flex: 1,
        alignItems: 'center'
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    PantryButtonWrapper: {
      width: '40%',
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: theme.SECONDARY_COLOUR,
      borderRadius: 10,
      marginTop: 6,
      borderWidth: 1,
      borderColor: 'white',
    },
    PantryButtonText: {
      textAlign: 'center',
      fontSize: 12,
      fontWeight: '400',
      fontFamily: 'Poppins-Regular',
      color: '#000'
    },
    CardTitle: {
      marginTop: 10,
      fontSize: 16,
      marginBottom: 6,
      color: '#000',
      fontFamily: 'Poppins-Regular',
      alignSelf: 'flex-start'
  },
  EmptyPantryWrapper: {
    height: 292,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    padding: 12,
    elevation: 8,
    marginVertical: 10,
    backgroundColor: '#f0f0f0'
  },
  EmptyPantryHeader: {
    fontSize: 32,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700'
  },
  EmptyPantryButton: {
    width: '80%'
  },
  EmptyPantryButtonText: {
    fontSize: 16
  },
  EmptyPantryIcon: {
    height: 100,
    width: 100
  }
  });

export default UserIngredients