import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native';


const OffsiteLoginButton = ({icon, text}) => {


  return (
    <View style={styles.InputWrapper}>
        <View style={styles.IconWrapper}>
            <Image source={icon}/>
        </View>
        <View style={styles.InputBox}>
            <Text>{text}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    InputBox: {
        flexGrow: 2.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 10,
        backgroundColor: '#F44336',
        paddingVertical: 15
    },
    InputWrapper : {
        flexDirection: 'row',
        marginHorizontal: 55,
        marginTop: 22,
        borderRadius: 5
    },
    IconWrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 50,
        backgroundColor: '#C82B20',
        paddingVertical: 15,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    }
  });

export default OffsiteLoginButton