import React from 'react'
import {View, StyleSheet} from 'react-native';

import ChangeButton from '../common/ChangeButton';

const ChangeSettings = () => {
  return (
    <View style={styles.ChangeSettings}>
        <ChangeButton text="Settings" icon={require('../../Images/Settings.png')}/>
        <ChangeButton text="Change Appliances" icon={require('../../Images/Appliances.png')}/>
    </View> 
  )
}

const styles = StyleSheet.create({
    ChangeSettings: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 24,
        marginTop: 20
    },
    SettingsTitleWrapper: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 8
    },
    SettingsTitle: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Poppins-Regular',
        marginLeft: 12
    }
  });

export default ChangeSettings