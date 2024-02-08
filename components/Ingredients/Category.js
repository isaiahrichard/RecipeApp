import React from 'react'
import {View, StyleSheet} from 'react-native';
import CategoryButton from './CategoryButton';
  
const Category = () => {

  const categoryInfo = [
  {title: 'Veggies', icon: require('../../Images/veggies.png'), id: 'veg'}, 
  {title: 'Dairy', icon: require('../../Images/dairy.png'), id: 'dairy'},
  {title: 'Meats', icon: require('../../Images/meats.png'), id: 'meats'},
  {title: 'Spices', icon: require('../../Images/spices.png'), id: 'spices'},
  {title: 'Carbs', icon: require('../../Images/carbs.png'), id: 'carbs'},
  {title: 'Sauces', icon: require('../../Images/liquids.png'), id: 'sauces'},
]

  return (
    <View style={styles.Category}>
        <View style={styles.ButtonContainer}>
          {categoryInfo.map((category, index) => {
            return <CategoryButton text={category.title} icon={category.icon} key={index} id={category.id}/>
          })}

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Category:{
        marginHorizontal: 12,
        marginTop: 32
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
  });

export default Category