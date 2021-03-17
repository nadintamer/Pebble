import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Onboarding1 from '../screens/Onboarding1.js';
import OnboardingStackComponent from '../components/OnboardingStackComponent.js';
import AppNavigation from './AppNavigation.js';

import CustomIcon from '../components/CustomIcon'
import * as Font from 'expo-font';

import HomeStackComponent from '../components/HomeStackComponent.js';
import ExploreStackComponent from '../components/ExploreStackComponent.js';
import TasksScreen from '../screens/TasksScreen.js';
import ProfileStackComponent from '../components/ProfileStackComponent.js';


const TabNav = createBottomTabNavigator();
const OnStack = createStackNavigator();
export default function OnboardingNavigation () {

    const TabStuff = () => {
        return (
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
        );
    }

    return (
        <NavigationContainer> 
        <OnStack.Navigator headerMode="none">
                <OnStack.Screen name="OnboardingStackComponent" component={OnboardingStackComponent} />
                <OnStack.Screen name="AppNavigation" component={TabStuff()} /> 
        </OnStack.Navigator>
        </NavigationContainer>
    );
}
