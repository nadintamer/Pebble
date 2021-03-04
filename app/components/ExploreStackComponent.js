import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../themes/Colors';

import ExploreScreen from '../screens/ExploreScreen';
const ExploreStack = createStackNavigator();

export default function ExploreStackComponent() {
  return (
    <ExploreStack.Navigator
    initialRouteName="Explore"
    screenOptions={{
      headerBackImage: () => <Image source={require("../../assets/images/back-arrow.png")} style={{ marginLeft: 15 }}/>,
      headerBackTitleVisible: false,
    }}>
    <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: "Explore",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
    }}/>

    </ExploreStack.Navigator>
  );
} 
