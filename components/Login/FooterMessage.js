import React from 'react'
import {View, StyleSheet, Text, Linking} from 'react-native';


const FooterMessage = () => {


  return (
    <View style={styles.MsgWrapper}>
        <Text style={styles.MsgText}>Don't have and account?</Text>
        <Text style={[styles.MsgText, styles.Link]}
        onPress={() => Linking.openURL('http://google.com')}>
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