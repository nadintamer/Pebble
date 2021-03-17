import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon';
import CalendarStrip from 'react-native-calendar-strip'; // scrollbar experimentation
import HomeScreen from '../screens/HomeScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Onboarding1(props) {
  return (
    <SafeAreaView style={styles.homeContainer}>

      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/onboard2.png")}
          style={{ width: 375, height: 375}}
        />
      </View>

      <Text style={styles.heading}> Learn by Week </Text>
      <Text style={styles.description}> See an overview of the current week’s information and suggested tasks  in Home. </Text>


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
  imageContainer: {
    marginTop: 0.12 * windowHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    /*marginTop: 0.08 * windowHeight,*/
  },
  description: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 16,
    marginTop: 0.05 * windowHeight,
    marginBottom: 0.16 * windowHeight
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
