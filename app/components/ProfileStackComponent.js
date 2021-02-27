import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from '../screens/ProfileScreen';
const ProfileStack = createStackNavigator();

export default function ProfileStackComponent() {
  return (
          <ProfileStack.Navigator
            headerMode="float"
            initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
          </ProfileStack.Navigator>
  );
}
