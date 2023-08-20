import React, {useContext} from 'react'
import {View, StyleSheet, Text, TouchableHighlight, Alert} from 'react-native';
import { StateContext } from './Context/StateContext';
import {users} from '../data/users';
import theme from '../data/Style';

const Button = ({text, navigation}) => {

  const {usernameObj, passwordObj} = useContext(StateContext)

  const handleLogin = () => {
    const validLogin = validateUser()
    if(validLogin){
      navigation.navigate('home')
    }
    else{
      Alert.alert(
        "Please enter valid username and password"
      );
    }
  }

  const validateUser = () => {
    for (const element of users){
      if(usernameObj[0].trim() == element.username && passwordObj[0].trim() == element.password){
        //not removing spaces, FIX!!!
        usernameObj[0] = usernameObj[0].trim()
        passwordObj[0] = passwordObj[0].trim()
        return true
      }
    }
    return false
  }

  return (
    <TouchableHighlight onPress={handleLogin} underlayColor={'transparent'}>
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