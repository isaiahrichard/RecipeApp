import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';


const Stats = ({color, icon, text}) => {
  return (
    <View style={styles.StatsTitleWrapper}>
        <View style={[styles.ImageBackground,{backgroundColor: color}]}>
            <Image source={icon}/>
        </View>
        <Text style={styles.StatsTitle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    StatsTitleWrapper: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 50
    },
    StatsTitle: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
        paddingTop: 6
    },
    ImageBackground: {
        borderRadius: 50,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default Stats