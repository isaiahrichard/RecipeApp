import React from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import theme from '../../data/Style'

const TabBar = ({ingredientTab, setIngredientTab, titles}) => {

    const selectedTab = (active) => {
        if(active){
            return [styles.TabBarItem, {backgroundColor: theme.PRIMARY_COLOUR}]
        }
        else {
            return styles.TabBarItem
        }
    }

  return (
    <View style={styles.TabBarWrapper}>
        <TouchableHighlight onPress={() => setIngredientTab(false)} style={styles.touchButtons}>
            <View style={selectedTab(!ingredientTab)}>
                <Text style={styles.TabBarText}>{titles[0]}</Text>
                <Image source={require('../../Images/Appliances.png')} style={{marginBottom: 3}}/>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setIngredientTab(true)} style={styles.touchButtons}>
            <View style={selectedTab(ingredientTab)}>
                <Text style={styles.TabBarText}>{titles[1]}</Text>
                <Image source={require('../../Images/IngredTab.png')} style={{marginBottom: 5}}/>
            </View>
        </TouchableHighlight>
    </View> 
  )
}

const styles = StyleSheet.create({
    TabBarWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%'
    },
    TabBarItem: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 2,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    TabBarText: {
        marginRight: 13,
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular'
    },
    touchButtons: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
  });

export default TabBar