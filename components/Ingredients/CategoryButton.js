import React, {useContext, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import theme from '../../data/Style';
import { SearchContext } from '../Context/SearchContext';
import { allIngredients } from '../../data/allIngredients';

const segmentLength = Math.floor(allIngredients.length/ 6)

const CategoryButton = ( {text, icon, wrapperStyle, textStyle, id} ) => {
  const {searchStateObj} = useContext(SearchContext);
  const [ingredientList, setIngredientList] = useContext(SearchContext).ingredientObj

  const IdMap = {
    veg: 1,
    dairy: 2,
    meats: 3,
    spices: 4,
    carbs: 5,
    sauces: 6
  }
  

  const handleCategoryPress = async () => {
    const startIndex = (IdMap[id] - 1)*segmentLength
    const endIndex = startIndex + segmentLength

    await setIngredientList(allIngredients.slice(startIndex, endIndex))
    console.log("Updated ingredients")
    console.log(ingredientList.length)
    searchStateObj[1](true)
  }

  useEffect(() => {
    
    
  }, [ingredientList])
  

  return (
    <TouchableOpacity style={[styles.ButtonWrapper, wrapperStyle]} onPress={handleCategoryPress}>
        <Text style={[styles.TabBarText, textStyle]}>{text}</Text>
        <Image source={icon} style={styles.OptionIcon}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 8,
        paddingHorizontal: 8,
        width: '31%',
        backgroundColor: theme.SECONDARY_COLOUR
    },
    TabBarText: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        paddingTop: 4,
        color: '#000'
    },
    OptionIcon: {
      height: 20,
      width: 20,
      tintColor: 'black'
    }
  });

export default CategoryButton