import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import theme from '../../data/Style'



const TimePicker = () => {
  return (
    <View style={styles.CheckboxWrapper}>
      <Text style={styles.CheckboxMsg}>I have 2 hours </Text>
    </View> 
  )
}

const styles = StyleSheet.create({
    CheckboxWrapper: {  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 50
    },
    CheckboxMsg: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      paddingTop: 2
    },
  })

export default TimePicker