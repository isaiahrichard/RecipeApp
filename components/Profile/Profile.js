import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../Header'
import Footer from '../Footer';
import ProfileInfo from './ProfileInfo';
import ChangeSettings from './ChangeSettings';
import StatsHeader from './StatsHeader';
import Stats from './Stats';
import theme from '../../data/Style'

const Profile = ( {navigation} ) => {
  return (
    <View style={{flex: 1, backgroundColor: theme.BACKGROUND_COLOUR}}>
    <ScrollView>
      <Header/>
      <ProfileInfo />
      <ChangeSettings />
      <StatsHeader />
      <Stats color='#FFD772' icon={require('../../Images/RecipeStat.png')} text='Recipes Cooked: 13'/>
      <Stats color='#B8FF81' icon={require('../../Images/IngredTab.png')} text='Unique Ingredients Used: 56'/>
    </ScrollView>
    <Footer navigation = {navigation}/>
  </View>
  )
}

export default Profile