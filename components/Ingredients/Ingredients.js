import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from '../Header'
import SearchBarComp from '../SearchBarComp';
import Footer from '../Footer';
import OptionCard from './IngredientCard';
import ChangeButton from '../ChangeButton';
import {favouriteIngredients} from '../../data/IngredientData'
import theme from '../../data/Style'
import { SearchContext } from '../Context/SearchContext';
import Category from './Category.js';
import { IngredientContext } from '../Context/IngredientContext';



const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const Ingredients = ( {navigation} ) => {
  const [ingredients, setIngredients] = useContext(IngredientContext).ingredientObj
  const {searchStateObj, currSearchObj} = useContext(SearchContext);

  const addIngredient = (ingredient) => {
    // add ingredient to context here
    if (!ingredients.includes(ingredient)){
        setIngredients({...ingredients, ingredient})
    }
    return
}
  const renderItem = ({item}) => {
    return (
      <Item item={item} onPress={() => {addIngredient(item)}} backgroundColor={theme.PRIMARY_COLOUR}
        textColor={'white'}
      />
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <Header/>
      <SearchBarComp placeholderText={"Search for ingredients"}/>
      {searchStateObj[0] &&
        <SafeAreaView style={styles.container}>
        <FlatList
          data={currSearchObj[0]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>}
      {!searchStateObj[0] && <ScrollView>
      <View>
        <Text style={styles.CardTitle}>Favourite Ingredients</Text>
        <OptionCard buttonInfoArray={favouriteIngredients} maxSize={200}/>
        <Category />
        <View style={styles.ChangeSettings}>
          <ChangeButton text="Your Ingredients" icon={require('../../Images/Settings.png')}/>
          <ChangeButton text="Scan Receipt" icon={require('../../Images/Appliances.png')}/>
        </View>
      </View>
    </ScrollView>}
    {!searchStateObj[0] && <Footer navigation = {navigation}/>}
  </View>
  )
}

const styles = StyleSheet.create({
  ChangeSettings: {
      flex: 1,
      flexDirection: 'column',
      marginHorizontal: 12,
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
  },
  CardTitle: {
    marginTop: 10,
    paddingLeft: 16,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular'
},
container: {
  flex: 1,
},
item: {
  padding: 10,
  marginVertical: 2,
  marginHorizontal: 12,
  borderRadius: 10
},
title: {
  fontSize: 16,
}
});

export default Ingredients