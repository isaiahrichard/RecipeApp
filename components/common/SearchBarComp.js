import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { SearchContext } from '../Context/SearchContext';
import { ingredients } from '../../data/IngredientList';
import { useRoute } from '@react-navigation/native';

const SearchBarComp = ({placeholderText}) => {
  const {searchStateObj, currSearchObj} = useContext(SearchContext);
  const [searchVar, setSearchVar] = useState("");
  const route = useRoute();
  const onOptions = route.name == 'options'

  const containsSubstring = (ingredient) => {
    const searchLen = searchVar.length;
    return (ingredient.title.substring(0, searchLen).toUpperCase() == searchVar.toUpperCase()) || (searchLen >= 3 && ingredient.title.toUpperCase().includes(searchVar.toUpperCase()));
  }

  useEffect(() => {
    const searchLen = searchVar.length;
    if(searchLen){
      const filteredSearch = ingredients.filter(containsSubstring);
      currSearchObj[1](filteredSearch);
    }
    else{
      currSearchObj[1](ingredients);
    }
  }, [searchVar])

  return (
    <View style={styles.searchBarWrapper}>
      {(searchStateObj[0] && onOptions) && <TouchableOpacity onPress={() => searchStateObj[1](false)}>
        <Image
          source={require('../../Images/BackArrow.png')} 
          style={styles.BackIcon}
        />
      </TouchableOpacity>}
      <View style={[styles.SectionStyle, {width: (searchStateObj[0] && onOptions) ? '86%' : '93.6%', marginHorizontal: searchStateObj[0] && onOptions ? 0 : 12}]}>
          <Image
              source={require('../../Images/SearchIcon.png')} 
              style={styles.ImageStyle}
              />
          <TextInput
              style={styles.textStyle}
              placeholder={placeholderText}
              placeholderTextColor="#000"
              underlineColorAndroid="transparent"
              spellCheck={false}
              value={searchVar}
              onChangeText={inputText => setSearchVar(inputText)} //not setting search text correctly
              onFocus={() => searchStateObj[1](true)}
              blurOnSubmit={true}
              />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 0,
    borderColor: '#000',
    height: 40,
    borderRadius: 10,
    margin: 12,
    marginHorizontal: 16,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  searchBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
      padding: 10,
      margin: 10,
      height: 15,
      width: 15,
      resizeMode: 'stretch',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1
  },
  BackIcon: {
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginHorizontal: 6
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    width: '100%',
    fontSize: 16,
    paddingTop: 3,
    paddingBottom: 0,
    paddingLeft: 50,
    borderRadius: 10,
    height: '100%',
    zIndex: 2
  }
});

export default SearchBarComp;