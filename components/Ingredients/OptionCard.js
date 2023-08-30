import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native';

import OptionButton from './OptionButton';
import {favouriteIngredients} from '../../data/IngredientData'


const OptionCard = ({maxSize}) => {

  return (
    <ScrollView style={{maxHeight: maxSize}}>
    <View style={styles.OptionCard}>
        <View style={styles.ButtonContainer}>
            {favouriteIngredients.map((ingredient, index) => {
                return <View style={{width: '47%', marginBottom: 12}} key={index}>
                            <OptionButton title={ingredient}/>
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