import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, AsyncStorage } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Swiper from 'react-native-swiper'

import CustomIcon from '../components/CustomIcon'
import * as Font from 'expo-font';

import Onboarding1 from '../screens/Onboarding1.js';
import Onboarding2 from '../screens/Onboarding2.js';
import Onboarding3 from '../screens/Onboarding3.js';
import Onboarding4 from '../screens/Onboarding4.js';
import Onboarding5 from '../screens/Onboarding5.js';

import HomeStackComponent from '../components/HomeStackComponent.js';
import ExploreStackComponent from '../components/ExploreStackComponent.js';
import TasksScreen from '../screens/TasksScreen.js';
import ProfileStackComponent from '../components/ProfileStackComponent.js';
import DotComponent from '../components/Dot.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    <Swiper 
    paginationStyle={{ bottom: 0.22 * windowHeight}} 
    dot={<View style={styles.dot}/>}
    activeDot={<View style={styles.activeDot} />}
    controlsProps={{  }}
    >
        <Onboarding1 setOpenedApp={setOpenedApp}/>
        <Onboarding2 />
        <Onboarding3 />
        <Onboarding4 />
        <Onboarding5 setOpenedApp={setOpenedApp}/>
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
  activeDot: {
    backgroundColor:'rgba(50, 49, 117, 1.0)', width: 18, height: 18,borderRadius: 500, marginLeft: 25, marginRight: 25, marginTop: 3, marginBottom: 3
  },
  dot: {
    backgroundColor:'rgba(220, 220, 244, 1.0)', width: 18, height: 18,borderRadius: 500, marginLeft: 25, marginRight: 25, marginTop: 3, marginBottom: 3
  }
});
