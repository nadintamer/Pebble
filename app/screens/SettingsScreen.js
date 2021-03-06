import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'

    

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SettingsScreen({ navigation }) {
  return (
  <SafeAreaView style={styles.homeContainer}>
      <Text>Settings</Text>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});

