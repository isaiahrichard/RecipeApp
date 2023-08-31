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

export default IngredientTile