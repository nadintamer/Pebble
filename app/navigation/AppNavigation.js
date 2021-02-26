import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import CustomTabBarIcon from '../components/CustomTabBarIcon.js'
import * as Font from 'expo-font';

import HomeStackComponent from '../components/HomeStackComponent.js';
import ExploreStackComponent from '../components/ExploreStackComponent.js';
import TasksStackComponent from '../components/TasksStackComponent.js';
import ProfileStackComponent from '../components/ProfileStackComponent.js';

const TabNav = createBottomTabNavigator();
export default function AppNavigation() {
  let [loading, setLoading] = useState(true);

  async function loadFont() {
    await Font.loadAsync({
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });
  }

  useEffect(() => {
    loadFont();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#3231B1',
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            //let iconName;
            const icons = {
              Home: 'home',
              Explore: 'search',
              Tasks: 'checkbox',
              Profile: 'penguin',
            };

            // You can return any component that you like here!
            return <CustomTabBarIcon name={icons[route.name]} size={28} color={color} style={{ height: 28, width: 38 }} />;
          },
        })}
      >
        <TabNav.Screen name="Home" component={HomeStackComponent} />
        <TabNav.Screen name="Explore" component={ExploreStackComponent} />
        <TabNav.Screen name="Tasks" component={TasksStackComponent} />
        <TabNav.Screen name="Profile" component={ProfileStackComponent} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
