import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

import CustomIcon from '../components/CustomIcon'
import * as Font from 'expo-font';

import Onboarding1 from '../screens/Onboarding1.js';
import Onboarding2 from '../screens/Onboarding2.js';

import HomeStackComponent from '../components/HomeStackComponent.js';
import ExploreStackComponent from '../components/ExploreStackComponent.js';
import TasksScreen from '../screens/TasksScreen.js';
import ProfileStackComponent from '../components/ProfileStackComponent.js';

const TabNav = createBottomTabNavigator();
export default function AppNavigation() {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);

  async function loadFont() {
    await Font.loadAsync({
      icomoon: require('../../assets/fonts/icomoon.ttf'),
    });
  }

  const setOpenedApp = async (val) => {
    try {
      await AsyncStorage.setItem('openedApp', JSON.stringify(val));
      await getOpenedApp();
    } catch (e) {
      console.error(e);
    }
  };

  const setOnboardedFromStorage = (val) => {
    setOnboarded(JSON.parse(val));
  };

  const getOpenedApp = async () => {
    try {
      const openedApp = await AsyncStorage.getItem('openedApp');
      console.log(openedApp);
      if (openedApp !== null) {
        setOnboardedFromStorage(openedApp);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // getOpenedApp(); -- uncomment this line to only show onboarding screen once
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
    !onboarded
    ?
    <Swiper style={styles.wrapper} >
        <Onboarding1/>
        <Onboarding2 setOpenedApp={setOpenedApp}/>
    </Swiper>
    :
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#3231B1',
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Home: 'home',
              Explore: 'search',
              Tasks: 'checkbox-circle',
              Profile: 'penguin',
            };

            // You can return any component that you like here!
            return <CustomIcon name={icons[route.name]} size={28} color={color} style={{ height: 28, width: 38 }} />;
          },
        })}
      >
        <TabNav.Screen name="Home" component={HomeStackComponent} />
        <TabNav.Screen name="Explore" component={ExploreStackComponent} />
        <TabNav.Screen name="Tasks" component={TasksScreen} initialParams={{ startingTab: 1 }}/>
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
