import React, {useContext} from 'react'
import {View, ScrollView, Alert} from 'react-native';
import axios from 'axios'
import FieldBoxWrapper from './FieldBoxWrapper';
import Title from '../common/Title';
import CheckBoxMsg from '../common/CheckBoxMsg'
import Button from '../common/Button';
import Divider from './Divider';
import OffsiteLoginButton from './OffsiteLoginButton';
import FooterMessage from './FooterMessage';
import BottomLogo from './BottomLogo';
import theme from '../../data/Style'
import { LoginContext } from '../Context/LoginContext';
import { StateContext } from '../Context/StateContext';

const Login = ( {navigation} ) => {
  googleIcon = require('../../Images/Google.png')

  const {usernameObj, passwordObj, nameObj} = useContext(LoginContext)
  const [currentUser, setCurrentUser] = useContext(StateContext).currentUserObj

  const handleLogin = () => {
    const userInfo = {username: usernameObj[0], password: passwordObj[0]}
    axios.post(`${global.API_URL}/user/login`, userInfo)
    .then(response => {
        navigation.navigate("home")
        setCurrentUser(response.data)
    })
    .catch(error => {
      console.error('An error occurred:', error.message);
      Alert.alert(
        "Invalid login credentials"
      );
      usernameObj[1]("")
      passwordObj[1]("")
      nameObj[1]("")
    });
  }


  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <ScrollView>
        <Title title="Less Thinking, More Eating."/>
        <FieldBoxWrapper />
        <View style={{marginTop: 22}}>
          <CheckBoxMsg message="Remember me"/>
        </View>
        <Button text="Login" onClick={handleLogin}/>
        <Divider />
        <OffsiteLoginButton icon={googleIcon} text="Login with Google"/>
        <FooterMessage navigation={navigation}/>
      </ScrollView>
      <BottomLogo />
    </View>
  )
}

export default Login