import React, {useContext, useState} from 'react';
import theme from '../../data/Style'
import {View, ScrollView, StyleSheet} from 'react-native';

import Header from '../common/Header'
import SearchBarComp from '../common/SearchBarComp';
import Footer from '../common/Footer';
import UserIngredients from './UserIngredients';
import ChangeButton from '../common/ChangeButton';
import Category from './Category.js';
import IngredientList from './IngredientList';

import { SearchContext } from '../Context/SearchContext';
import { allIngredients } from '../../data/allIngredients';

const Ingredients = () => {
  const {searchStateObj} = useContext(SearchContext);
  const [ingredientList, setIngredientList] = useContext(SearchContext).ingredientObj

  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <Header/>
      <SearchBarComp placeholderText={"Search for ingredients"} searchList={allIngredients} setFilteredList={setIngredientList}/>
      {searchStateObj[0] &&
        <IngredientList displayList={ingredientList}/>}
      {!searchStateObj[0] && <ScrollView>
      <View>
        <UserIngredients />
        <Category />
        <View style={styles.ChangeSettings}>
          <ChangeButton text="Scan Receipt" icon={require('../../Images/Appliances.png')}/>
        </View>
      </View>
    </ScrollView>}
    {!searchStateObj[0] && <Footer/>}
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
container: {
  flex: 1,
},
});

export default Ingredients