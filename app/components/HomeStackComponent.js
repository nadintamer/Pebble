import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

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
          title: 'Week 30',
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
            height: 120
          },
          headerTitleStyle: {
            fontFamily: 'Nunito_700Bold',
            fontSize: 30,
          },
          headerRight: () => (
            <Text style={styles.headerArrow}>31 →</Text>
          ),
          headerLeft: () => (
            <Text style={styles.headerArrow}>← 29</Text>
          )
        }}
      />
      <HomeStack.Screen
        name="WeekInfo"
        component={WeekInfoScreen}
        options={{
          title: "Week 30 Info",
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
      <HomeStack.Screen
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
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerArrow: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    marginHorizontal: 18,
    color: Colors.grey,
  },
})
