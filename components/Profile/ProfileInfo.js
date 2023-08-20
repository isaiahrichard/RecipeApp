import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native';

const ProfileInfo = () => {


  return (
    <View style={styles.ProfileInfo}>
        <Image source={require('../../Images/ProfilePic.png')} style={styles.ProfilePic}/>
        <Text style={styles.ProfileName}>Leon Xu</Text>
        <Text style={styles.ProfileStats}>Member Since 2022-09-29</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
    ProfileInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    ProfilePic: {
        borderRadius: 50,
        marginBottom: 5
    },
    ProfileName: {
        fontSize: 24,
        color: '#000',
        fontFamily: 'Poppins-Regular'
    },
    ProfileStats: {
        fontSize: 12,
        fontFamily: 'Poppins-Italic',
        color: '#515151'
    }
  });

export default ProfileInfo