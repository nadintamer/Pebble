import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../themes/Colors';
import WeekInfoScreen from '../screens/WeekInfoScreen';
import ArticleScreen from '../screens/ArticleScreen';


import EmergencyScreen from '../screens/EmergencyScreen';
import MapScreen from '../screens/MapScreen';


const EmergencyStack = createStackNavigator();
export default function EmergencyStackComponent() {
  return (
    <EmergencyStack.Navigator
      initialRouteName="Emergency"
      screenOptions={{
        headerBackImage: () => <Image source={require("../../assets/images/back-arrow.png")} style={{ marginLeft: 15 }}/>,
        headerBackTitleVisible: false,
      }}>
      <EmergencyStack.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{
          title: 'Emergency',
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: 'Nunito_700Bold',
            fontSize: 30,
          }
        }}
      />
      <EmergencyStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
     
    </EmergencyStack.Navigator>
  );
}
