import React, { useContext } from 'react'
import { View, Image, StyleSheet, TouchableHighlight} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { LoginContext } from '../Context/LoginContext';
import { SearchContext } from '../Context/SearchContext';
import theme from '../../data/Style'
import { ingredients } from '../../data/IngredientList';

const Footer = ( {navigation} ) => {
  
    const route = useRoute()

    homeDark = require('../../Images/Footer/HomeDark.png')
    homeLight = require('../../Images/Footer/HomeLight.png')
    OptionsDark = require('../../Images/Footer/OptionsDark.png')
    OptionsLight = require('../../Images/Footer/OptionsLight.png')
    RecipesDark = require('../../Images/Footer/RecipesDark.png')
    RecipesLight = require('../../Images/Footer/RecipesLight.png')
    ProfileDark = require('../../Images/Footer/ProfileDark.png')
    ProfileLight = require('../../Images/Footer/ProfileLight.png')
    LoginLight = require('../../Images/Settings.png')
    LoginDark = require('../../Images/Footer/LoginDark.png')

    onHomePage = route.name == 'home'
    onOptionsPage = route.name == 'options'
    onRecipesPage = route.name == 'recipes'
    onProfilePage = route.name == 'profile'
    onLoginPage = route.name == 'login'

    const PageInfo = [
      {
        imgSrc: onHomePage ? homeLight : homeDark,
        pageName: 'home',
        styles: onHomePage ? {flex: 1, backgroundColor: theme.HIGHLIGHT_COLOUR} : {flex: 1}
      },
      {
        imgSrc: onOptionsPage ? OptionsLight : OptionsDark,
        pageName: 'options',
        styles: onOptionsPage ? {flex: 1, backgroundColor: theme.HIGHLIGHT_COLOUR} : {flex: 1}
      },
      {
        imgSrc: onRecipesPage ? RecipesLight : RecipesDark,
        pageName: 'recipes',
        styles: onRecipesPage ? {flex: 1, backgroundColor: theme.HIGHLIGHT_COLOUR} : {flex: 1}
      },
      {
        imgSrc: onProfilePage ? ProfileLight : ProfileDark,
        pageName: 'profile',
        styles: onProfilePage ? {flex: 1, backgroundColor: theme.HIGHLIGHT_COLOUR} : {flex: 1}
      },
      {
        imgSrc: onLoginPage ? LoginLight : LoginDark,
        pageName: 'login',
        styles: onLoginPage ? {flex: 1, backgroundColor: theme.HIGHLIGHT_COLOUR} : {flex: 1}
      }
    ]

    const {usernameObj, passwordObj, checkBoxObj} = useContext(LoginContext)
    const {searchStateObj, currSearchObj} = useContext(SearchContext);

    const handlePress = (Page) => {
      if(Page.pageName == 'login'){
        if(!checkBoxObj[0]){
          usernameObj[1]("")
          passwordObj[1]("")
        }
      }
      else{ 
        //navigation.navigate(Page.pageName)
      }
      searchStateObj[1](false);
      currSearchObj[1](ingredients)
      navigation.navigate(Page.pageName)
    }

  return (
    <View style={styles.FooterWrapper}> 
        {PageInfo.map((Page, index) => { 
           return <TouchableHighlight 
                    onPress={() => handlePress(Page)}
                    underlayColor={'transparent'} 
                    style={Page.styles}
                    key={index}
                  >
                      <View style={styles.IconContainer}> 
                        <Image source={Page.imgSrc} style={styles.FooterIcons} />
                      </View>
                  </TouchableHighlight>
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    FooterIcons: {
        height: 30,
        width: 35,
        resizeMode: 'contain',
    },
    IconContainer: {
      padding: 20,
      alignItems: 'center'
    },
    FooterWrapper: {
        flexDirection: 'row',
        backgroundColor: theme.PRIMARY_COLOUR,
        alignItems: 'center',
        maxHeight: 70,
        minHeight: 70
    }
  });

export default Footer