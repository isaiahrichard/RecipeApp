import React from 'react'
import {View} from 'react-native';
import FieldBox from './FieldBox';


const FieldBoxWrapper = () => {
    usernameIcon = require('../../Images/Footer/LoginLight.png')
    passwordIcon = require('../../Images/Footer/LoginDark.png')

  return (
    <View style={{flex: 1}}>
        <FieldBox icon={usernameIcon} />
        <FieldBox icon={passwordIcon} isPassword={true}/>
    </View>
  )
}


export default FieldBoxWrapper