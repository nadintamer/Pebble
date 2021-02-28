import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../themes/Colors';

const ProfileStack = createStackNavigator();
export default function ProfileStackComponent() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
            height: 44,
          },
        }}/>
    </ProfileStack.Navigator>
  );
}
