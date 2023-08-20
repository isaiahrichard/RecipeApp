import React from 'react'
import {TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import theme from '../../data/Style';

const CategoryButton = ( {text, icon, wrapperStyle, textStyle} ) => {


  return (
    <TouchableOpacity style={[styles.ButtonWrapper, wrapperStyle]}>
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