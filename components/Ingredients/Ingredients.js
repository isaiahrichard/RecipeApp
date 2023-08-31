import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from '../common/Header'
import SearchBarComp from '../common/SearchBarComp';
import Footer from '../common/Footer';
import UserIngredients from './UserIngredients';
import ChangeButton from '../common/ChangeButton';
import theme from '../../data/Style'
import { SearchContext } from '../Context/SearchContext';
import Category from './Category.js';
import { StateContext } from '../Context/StateContext';
import IngredientList from './IngredientList';

const Ingredients = ( {navigation} ) => {
  const [currentUser, setCurrentUser] = useContext(StateContext).currentUserObj
  const {searchStateObj} = useContext(SearchContext);
  
  const addIngredient = (ingredient) => {
    if (!currentUser.ingredients.includes(ingredient.title)){
        setCurrentUser({...currentUser, ingredients: [...currentUser.ingredients, ingredient.title]})
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
    
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
      <Header/>
      <SearchBarComp placeholderText={"Search for ingredients"}/>
      {searchStateObj[0] &&
        <IngredientList />}
      {!searchStateObj[0] && <ScrollView>
      <View>
        <UserIngredients />
        <Category />
        <View style={styles.ChangeSettings}>
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
container: {
  flex: 1,
},
});

export default Ingredients