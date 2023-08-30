import React, {useContext} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import { IngredientContext } from '../Context/IngredientContext';

const OptionButton = ( {title} ) => {

    const [ingredients, setIngredients] = useContext(IngredientContext).ingredientObj

    const addIngredient = () => {
        // add ingredient to context here
        if (!ingredients.includes(title)){
            setIngredients([...ingredients, title])
        }
        return
    }

  return (
    <TouchableHighlight onPress={addIngredient} underlayColor={'transparent'}>
    <View style={styles.ButtonWrapper} >
        <Text style={styles.TabBarText}>{title}</Text>
        <Image source={require('../../Images/Add.png')} style={styles.OptionIcon}/>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        maxWidth: 171,
        paddingVertical: 5,
        flexBasis: 50
    },
    TabBarText: {
        marginRight: 25,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
        paddingTop: 3,
        color: '#000'
    },
    OptionIcon: {
        position: 'absolute',
        right: 15
    }
  });

export default OptionButton