import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';


const RecipeSubstitues = ({missing, substitute}) => {

  return (
    <View style={styles.RecipeSubstitues}>
        <Text>{missing}</Text>
        <Image source={require('../../Images/forwardArrow.png')} style={styles.Arrow}/>
        <Text>{substitute}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    RecipeSubstitues: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 12,
      fontSize: 14,
      marginVertical: 2,
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 3,
      borderRadius: 10
    },
    Arrow: {
        maxHeight: 20,
        maxWidth: 100
    }
  });

export default RecipeSubstitues