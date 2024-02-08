import React from 'react'
import {View, StyleSheet, Text} from 'react-native';

const IngredientTile = ( {title} ) => {

  return (
    <View style={styles.ButtonWrapper} >
        <Text style={styles.TabBarText}>{title}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        maxWidth: 171,
        paddingVertical: 5,
        flexBasis: 50,
        paddingHorizontal: 10
    },
    TabBarText: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        paddingTop: 3,
        color: '#000',
        textAlign: 'center'
    }
  });

export default IngredientTile