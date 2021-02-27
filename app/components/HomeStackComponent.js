import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();
export default function HomeStackComponent() {
  return (
    <HomeStack.Navigator
      headerMode="float"
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
  );
}
