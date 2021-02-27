import React from 'react';
import { Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import TasksScreen from '../screens/TasksScreen';

const TasksStack = createStackNavigator();
export default function TasksStackComponent() {
  return (
    <TasksStack.Navigator
      initialRouteName="Profile">
      <TasksStack.Screen name="Tasks" component={TasksScreen}/>
    </TasksStack.Navigator>
  );
}
