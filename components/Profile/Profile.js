import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../common/Header'
import Footer from '../common/Footer';
import ProfileInfo from './ProfileInfo';
import ChangeSettings from './ChangeSettings';
import StatsHeader from './StatsHeader';
import Stats from './Stats';
import theme from '../../data/Style'

const Profile = () => {
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
    <Footer/>
  </View>
  )
}

export default Profile