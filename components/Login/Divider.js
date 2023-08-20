import React from 'react'
import {View, StyleSheet, Text} from 'react-native';


const Divider = () => {


  return (
    <View style={styles.DividerWrapper}>
    <View style={styles.DividerLine} />
    <View>
        <Text style={{width: 30, textAlign: 'center'}}>or</Text>
    </View>
    <View style={styles.DividerLine} />
    </View>
  )
}

const styles = StyleSheet.create({
    DividerWrapper: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: 55,
        marginTop: 30
    },
    DividerLine: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'black'
    }
  });

export default Divider