import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';

import OptionButton from './IngredientButton';

const OptionCard = ({ buttonInfoArray, maxSize}) => {

  return (
    <ScrollView style={{maxHeight: maxSize}}>
    <View style={styles.OptionCard}>
        <View style={styles.ButtonContainer}>
            {buttonInfoArray.map((buttonInfo, index) => {
                return <View style={{width: '47%', marginBottom: 12}} key={index}>
                            <OptionButton addMode={buttonInfo.addMode} title={buttonInfo.title}/>
                        </View>
            })}
        </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    OptionCard:{
        marginHorizontal: 12,
        marginTop: 5
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
  });

export default OptionCard