import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';
import theme from '../data/Style'

const ChangeButton = ( {text, icon} ) => {


  return (
    <View style={styles.ButtonWrapper}>
        <Text style={styles.TabBarText}>{text}</Text>
        <Image source={icon} style={styles.OptionIcon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    ButtonWrapper: {
        backgroundColor: theme.SECONDARY_COLOUR,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 16,
        paddingLeft: 32,
        marginTop: 8
    },
    TabBarText: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        paddingTop: 4,
        color: '#000'
    },
    OptionIcon: {
        position: 'absolute',
        right: 30
    }
  });

export default ChangeButton