import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import FAQScreen from '../screens/FAQScreen';
import SavedCardsScreen from '../screens/SavedCardsScreen';
import Colors from '../themes/Colors';

const ProfileStack = createStackNavigator();
export default function ProfileStackComponent() {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackImage: () => <Image source={require("../../assets/images/back-arrow.png")} style={{ marginLeft: 15 }}/>,
        headerBackTitleVisible: false,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          title: null,
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => navigation.navigate('Settings')}>
              <Image
                source={require("../../assets/images/gear.png")}
                style={{ width: 34, height: 34}}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <ProfileStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
      <ProfileStack.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{
          title: "Emergency",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
      <ProfileStack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          title: "FAQ",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
      <ProfileStack.Screen
        name="Saved"
        component={SavedCardsScreen}
        options={{
          title: "Saved",
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: "Nunito_700Bold",
            fontSize: 30,
          }
        }}/>
    </ProfileStack.Navigator>
  );
}
