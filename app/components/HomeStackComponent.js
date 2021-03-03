import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../themes/Colors';
import WeekInfoScreen from '../screens/WeekInfoScreen';
import ArticleScreen from '../screens/ArticleScreen';


import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();
export default function HomeStackComponent() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackImage: () => <Image source={require("../../assets/images/back-arrow.png")} style={{ marginLeft: 15 }}/>,
        headerBackTitleVisible: false,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
        }}
      />
      <HomeStack.Screen
        name="WeekInfo"
        component={WeekInfoScreen}
        options={{
          title: "WeekInfo",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
      <HomeStack.Screen
        name="Article"
        component={ArticleScreen}
        options={{
          title: "Article",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
    </HomeStack.Navigator>
  );
}



