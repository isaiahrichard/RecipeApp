import React from 'react'
import {View, StyleSheet} from 'react-native';
import CategoryButton from './CategoryButton';
  
const Category = () => {

  const categoryInfo = [
  {title: 'Veggies', icon: require('../../Images/veggies.png')}, 
  {title: 'Dairy', icon: require('../../Images/dairy.png')},
  {title: 'Meats', icon: require('../../Images/meats.png')},
  {title: 'Spices', icon: require('../../Images/spices.png')},
  {title: 'Carbs', icon: require('../../Images/carbs.png')},
  {title: 'Liquids', icon: require('../../Images/liquids.png')},
]

  return (
    <View style={styles.Category}>
        <View style={styles.ButtonContainer}>
          {categoryInfo.map((category, index) => {
            return <CategoryButton text={category.title} icon={category.icon} key={index}/>
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