import React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Colors from '../themes/Colors';
import Onboarding1 from '../screens/Onboarding1';

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
          title: 'Week 30',
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
    </OnboardingStack.Navigator>
  );
}
