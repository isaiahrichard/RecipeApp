import React from 'react'
import {View, StyleSheet, Text, Linking, Image} from 'react-native';


const BottomLogo = () => {


  return (
    <View style={styles.MsgWrapper}>
        <Image source={require('../../Images/Logo.png')}/>
        <Text style={{textAlign: 'center'}}>Developed 2022{"\n"}Isaiah Richards{"\n"}Afraz Hemraj</Text>
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