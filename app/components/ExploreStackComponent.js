import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../themes/Colors';

import ExploreScreen from '../screens/ExploreScreen';
import SearchScreen from '../screens/SearchScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ResultsScreen from '../screens/ResultsScreen';
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
            height: 120
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
    }}/>
    <ExploreStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
            height: 120
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
    }}/>
    <ExploreStack.Screen
      name="Article"
      component={ArticleScreen}
      options={{
        title: "",
        headerStyle: {
          backgroundColor: Colors.white,
          shadowColor: 'transparent',
          height: 120
        },
        headerTitleStyle: {
          fontFamily: "Nunito_700Bold",
          fontSize: 30,
        }
      }}/>
    </ExploreStack.Navigator>
  );
}
