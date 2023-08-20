import React from 'react'
import {View, Text, StyleSheet} from 'react-native';


const Title = () => {
  return (
    <View style={styles.TextWrapper}>
        <Text style={styles.InnerText}>Less Thinking, More Eating.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    TextWrapper: {
        marginHorizontal: 31,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    InnerText: {
        fontSize: 22,
        color: '#000',
        fontWeight: '700',
        fontFamily: 'Poppins-ExtraBold',
        letterSpacing: 2
    }
  });

export default Title