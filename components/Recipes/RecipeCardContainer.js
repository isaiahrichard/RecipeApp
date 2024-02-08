import React from 'react'
import {View, StyleSheet, Text, ScrollView} from 'react-native';

import RecipeCard from './RecipeCard';
import RecipeCarosuelCard from './RecipeCarosuelCard';
import RecipeSubstitues from './RecipeSubstitues';

const RecipeCardContainer = ({title, data, ready}) => {

  const newUser = true;

  const favouriteRecipeScroll = () => {
    return   <View>
    <Text style={styles.RecipeScrollTitle}>{newUser ? 'Favourite recipes' : 'Popular recipes'}</Text>
    <View style={styles.RecipeScroll}>  
      <RecipeCarosuelCard recipeName={'Chicken'}/>
      <RecipeCarosuelCard recipeName={'Tacos'}/>
      <RecipeCarosuelCard recipeName={'Pasta'}/>
    </View>
  </View>
  }

  const substitutes = () => {
    return  <View>
    <Text style={styles.RecipeScrollTitle}>Common substitues</Text>
    <RecipeSubstitues missing={'ButterMilk'} substitute={'Milk and vinegar'}/>
    <RecipeSubstitues missing={'Flour'} substitute={'Cornstarch'}/>
  </View>
  }

  return (
    <View>
      <Text style={styles.ContainerTitle}>{title}</Text>
      <View>
        <ScrollView style={{maxHeight: 350}}>
          <View style={styles.RecipeContainer}> 
              {data.map((recipe, index) => <RecipeCard recipe={recipe} key={index}/>)}
          </View>
        </ScrollView>
        {ready ? favouriteRecipeScroll() : substitutes()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    RecipeContainer: {
      marginHorizontal: 16,
    },
    ContainerTitle: {
      marginTop: 5,
        paddingBottom: 5,
        paddingLeft: 3,
        fontSize: 14,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 16
    },
    ScrollContainer: {
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 1
    },
    RecipeScrollTitle: {
      marginTop: 6,
      textAlign: 'center',
      fontFamily: 'Poppins-Regular',
      fontSize: 18
    },
    RecipeScroll: {
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 6,
      justifyContent: 'space-around'
    },
    RecipeSubstitues: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 12,
      fontSize: 14
    }
  });

export default RecipeCardContainer