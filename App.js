import React from 'react';

import HomePage from './components/Home/Home';
import Ingredients from './components/Ingredients/Ingredients';
import Recipes from './components/Recipes/Recipes';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'
import RecipePageBase from './components/RecipePage/RecipePageBase';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginProvider } from './components/Context/LoginContext';
import { SearchProvider } from './components/Context/SearchContext';
import { StateProvider } from './components/Context/StateContext';

const Stack = createNativeStackNavigator();

const App = () => {

  global.API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

  return (
    <LoginProvider>
      <SearchProvider>
        <StateProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='home' component={HomePage}/>
          <Stack.Screen name='options' component={Ingredients}/>
          <Stack.Screen name='recipes' component={Recipes}/>
          <Stack.Screen name='profile' component={Profile}/>
          <Stack.Screen name='signup' component={SignUp} />
          <Stack.Screen name='recipepage' component={RecipePageBase} />
        </Stack.Navigator>
      </NavigationContainer>
      </StateProvider>
      </SearchProvider>
    </LoginProvider>
  );
};

export default App;