import React from 'react'
import {View, StyleSheet, Text, Linking, Image} from 'react-native';


const BottomLogo = () => {


  return (
    <View style={styles.MsgWrapper}>
        <Image source={require('../../Images/Logo.png')}/>
        <Text style={{textAlign: 'center'}}>Developed 2023{"\n"}Isaiah Richards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    MsgWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
  });

export default BottomLogo