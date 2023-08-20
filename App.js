import React from 'react';

import HomePage from './components/Home/Home';
import Ingredients from './components/Ingredients/Ingredients';
import Recipes from './components/Recipes/Recipes';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StateProvider } from './components/Context/StateContext';
import { SearchProvider } from './components/Context/SearchContext';
import { IngredientProvider } from './components/Context/IngredientContext';

const Stack = createNativeStackNavigator();

const App = () => {

  global.API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

  return (
    <IngredientProvider>
    <StateProvider>
      <SearchProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='home' component={HomePage}/>
          <Stack.Screen name='options' component={Ingredients}/>
          <Stack.Screen name='recipes' component={Recipes}/>
          <Stack.Screen name='profile' component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
      </SearchProvider>
    </StateProvider>
    </IngredientProvider>
  );
};

export default App;