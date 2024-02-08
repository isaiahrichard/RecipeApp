// ListComponent.js
import React, { memo, useContext} from "react";
import theme from '../../data/Style'
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import axios from 'axios'

import { StateContext } from '../Context/StateContext';

const ListComponent = ({ item }) => {

    const [currentUser, setCurrentUser] = useContext(StateContext).currentUserObj


    const addIngredient = (ingredient) => {
        if (!currentUser.ingredients.includes(ingredient.name)){
            setCurrentUser({...currentUser, ingredients: [...currentUser.ingredients, ingredient.name.lower()]})
            axios.post(`${global.API_URL}/ingredients/add`, {ingredient: ingredient.name.lower()})
            
        }
        return
    }

return (
    <TouchableOpacity onPress={() => {addIngredient(item)}} style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
)
};

const styles = StyleSheet.create({
    item: {
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 12,
      borderRadius: 10,
      backgroundColor: theme.PRIMARY_COLOUR 
    },
    title: {
      fontSize: 16,
      color: 'white'
    }
  });


export default memo(ListComponent);