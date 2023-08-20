import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';


const StatsHeader = () => {
  return (
    <View style={styles.StatsTitleWrapper}>
        <Image source={require('../../Images/ProfileStats.png')}/>
        <Text style={styles.StatsTitle}>Stats</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    StatsTitleWrapper: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    StatsTitle: {
        fontSize: 24,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        paddingTop: 6,
        marginLeft: 6
    }
  });

export default StatsHeader