import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon';
import CalendarStrip from 'react-native-calendar-strip'; // scrollbar experimentation

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Onboarding2(props) {
  return (
    <SafeAreaView style={styles.homeContainer}>

      <Text> ONBOARDING 5</Text>
      <View style={styles.appButtonContainer}>
        <TouchableOpacity onPress={() => props.setOpenedApp(true)} style={styles.appButton}>
          <Text style={styles.appButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  heading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    marginBottom: 26,
  },
  appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginBottom: 0.08 * windowHeight
  },
  appButton: {
    width: 0.42 * windowWidth,
    height: 0.064 * windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    borderRadius: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.white,
    alignSelf: 'center',
    fontFamily: 'NunitoSans_700Bold',
  },
});
