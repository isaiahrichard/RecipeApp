import React, {useEffect} from 'react'
import axios from 'axios'
import {View, ScrollView} from 'react-native';
import FieldBoxWrapper from './FieldBoxWrapper';
import Title from './Title';
import CheckBoxMsg from '../CheckBoxMsg'
import Button from '../Button';
import Divider from './Divider';
import OffsiteLoginButton from './OffsiteLoginButton';
import FooterMessage from './FooterMessage';
import BottomLogo from './BottomLogo';
import theme from '../../data/Style'

const Login = ( {navigation} ) => {

  useEffect(() => {
    axios.get(`${global.API_URL}/users`).then(
      res => console.log(res.data)
    )
  }, [])
  

  googleIcon = require('../../Images/Google.png')

  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <ScrollView>
        <Title />
        <FieldBoxWrapper />
        <View style={{marginTop: 22}}>
          <CheckBoxMsg message="Remember me"/>
        </View>
        <Button text="Login" navigation={navigation} />
        <Divider />
        <OffsiteLoginButton icon={googleIcon} text="Login with Google"/>
        <FooterMessage />
      </ScrollView>
      <BottomLogo />
    </View>
  )
}

export default Login