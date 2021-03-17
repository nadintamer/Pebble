import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../themes/Colors';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import HomeStackComponent from '../components/HomeStackComponent';
import WeekInfoScreen from '../screens/WeekInfoScreen';
import AppNavigation from '../navigation/AppNavigation';

const OnboardingStack = createStackNavigator();
export default function OnboardingStackComponent() {
  return (
    <OnboardingStack.Navigator
      initialRouteName="Onboarding1"
      screenOptions={{
        headerBackImage: () => <Image source={require("../../assets/images/back-arrow.png")} style={{ marginLeft: 15 }}/>,
        headerBackTitleVisible: false,
      }}>
      <OnboardingStack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{
          title: '',
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
      <OnboardingStack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}
        />
        </OnboardingStack.Navigator>
  );
}
