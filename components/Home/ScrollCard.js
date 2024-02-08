import React from 'react'
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import RecipeCard from '../Recipes/RecipeCard';

const ScrollCard = ({title, recipes}) => {

    let screenWidth = Dimensions.get('window').width;

  return (
      <View style={{width: screenWidth, display: 'flex', paddingHorizontal: 12}}>
        <View style={styles.ScrollCardTitleWrapper}>
            <Text style={styles.ScrollCardTitle}>{title}</Text>
            <Text style={{paddingTop: 10}}>See all</Text>
        </View>
        {recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} key={index}/>
        })}
      </View>
  )
}

const styles = StyleSheet.create({
      TetxStyle: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center'
      },
      ScrollCardTitleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -4
      },
      ScrollCardTitle: {
        fontSize: 24, 
        color: 'black', 
        fontWeight: '700', 
        fontFamily: 'Poppins-Regular'
      }
  });

export default ScrollCard