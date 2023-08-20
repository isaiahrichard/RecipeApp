import React, {useContext, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, StyleSheet, Text} from 'react-native';
import { StateContext } from './Context/StateContext';
import theme from '../data/Style'
import { useRoute } from '@react-navigation/native';



const CheckBoxMsg = ({message}) => {

    const [checkVal, setCheckVal] = useState(false);
    const {checkBoxObj} = useContext(StateContext);
    const onLogin = useRoute().name == 'login';


  return (
    <View style={styles.CheckboxWrapper}>
          <CheckBox
          value={onLogin ? checkBoxObj[0] : checkVal}
          onValueChange={(newValue) => {onLogin ? checkBoxObj[1](newValue) : setCheckVal(newValue)}}
          tintColors={{ true: theme.PRIMARY_COLOUR}}
          />
          <Text style={styles.CheckboxMsg}>{message}</Text>
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
      fontSize: 13,
      fontFamily: 'Poppins-Regular',
      color: '#000',
      paddingLeft: 10,
      paddingTop: 2
    }
  })

export default CheckBoxMsg