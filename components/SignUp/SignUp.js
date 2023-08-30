import React, {useContext, useEffect} from 'react'
import {View, ScrollView, Alert} from 'react-native';
import axios from 'axios'
import Title from '../common/Title';
import BottomLogo from '../Login/BottomLogo';
import { LoginContext } from '../Context/LoginContext';
import FieldInputBox from '../common/FieldInputBox';
import Button from '../common/Button';
import theme from '../../data/Style'

const Login = ( {navigation} ) => {

  googleIcon = require('../../Images/Google.png')
  const {usernameObj, passwordObj, nameObj} = useContext(LoginContext)

  useEffect(() => {
    usernameObj[1]("")
    passwordObj[1]("")
    nameObj[1]("")
  }, [])
  

  const createUser = () => {
    const userInfo = {
      name: nameObj[0],
      username: usernameObj[0],
      password: passwordObj[0]
    }
    axios.post(`${global.API_URL}/user`, userInfo).then(res => {
      if (res.status === 200){
        navigation.navigate('home')
      }
      else{
        Alert.alert(
          "Failed to create user"
        );
      }
    })
  }

  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <ScrollView>
        <Title title={'New User'}/>
        <FieldInputBox value={nameObj[0]} setValue={nameObj[1]} placeholder={'Name'}/>
        <FieldInputBox value={usernameObj[0]} setValue={usernameObj[1]} placeholder={'Username'}/>
        <FieldInputBox value={passwordObj[0]} setValue={passwordObj[1]} placeholder={'Password'}/>
        <Button text="Create User" onClick={createUser}/>
      </ScrollView>
      <BottomLogo />
    </View>
  )
}

export default Login