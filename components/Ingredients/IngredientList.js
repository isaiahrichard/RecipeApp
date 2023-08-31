import React, {useEffect, useContext} from 'react'
import {StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Text} from 'react-native';

import theme from '../../data/Style'

import { SearchContext } from '../Context/SearchContext';
import { StateContext } from '../Context/StateContext';

import { cachedIngredients } from '../../data/CachedIngredients';


  
const IngredientList = () => {

  const { currSearchObj } = useContext(SearchContext);
  const [currentUser, setCurrentUser] = useContext(StateContext).currentUserObj


    const addIngredient = (ingredient) => {
      if (!currentUser.ingredients.includes(ingredient.name)){
          setCurrentUser({...currentUser, ingredients: [...currentUser.ingredients, ingredient.name]})
      }
      return
   }

    const renderItem = ({item}) => {
        return (
            <Item item={item} onPress={() => {addIngredient(item)}} backgroundColor={theme.PRIMARY_COLOUR}
            textColor={'white'}
            />
        );
    };
    
    const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{item.name}</Text>
    </TouchableOpacity>
    );

  useEffect(() => {
    currSearchObj[1](cachedIngredients)
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={currSearchObj[0]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 12,
      borderRadius: 10
    },
    title: {
      fontSize: 16,
    }
  });

export default IngredientList