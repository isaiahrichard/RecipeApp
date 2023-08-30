import React from 'react'
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import theme from '../../data/Style';

const Button = ({text, onClick}) => {

  return (
    <TouchableHighlight onPress={onClick} underlayColor={'transparent'}>
      <View style={styles.ButtonWrapper}>
          <Text style={styles.InnerText}>{text}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        marginHorizontal: 55,
        backgroundColor: theme.PRIMARY_COLOUR,
        borderRadius: 5,
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18
    },
    InnerText: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular'
    }
  });

export default Button