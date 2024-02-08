import React, {useContext} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { StateContext } from '../Context/StateContext';


const FooterMessage = () => {

  const navigation = useContext(StateContext).navigation


  return (
    <View style={styles.MsgWrapper}>
        <Text style={styles.MsgText}>Don't have and account?</Text>
        <Text style={[styles.MsgText, styles.Link]}
        onPress={() => navigation.navigate("signup")}>
            Sign Up Now
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    MsgText: {
        fontSize: 14,
        marginTop: 2
    },
    Link: {
        color: '#008AEE',
        textDecorationLine: 'underline'
    },
    MsgWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
  });

export default FooterMessage