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
          source={require("../../assets/images/onboard1.png")}
          style={{ width: 0.44 * windowWidth, height: 0.2 * windowHeight}}
        />
      </View>

      <Text> Welcome to Pebble </Text>
      <Text> Let's walk you through the basics </Text>

      <View style={styles.appButtonContainer}>
        <TouchableOpacity onPress={() => props.setOpenedApp(true)} style={styles.appButton}>
              <Text style={styles.appButtonText}>Skip</Text>
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
  imageContainer: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  
  heading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    marginBottom: 26,
  },
  bodyText: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 16,
    marginBottom: 20,
  },
  appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 6,
  },
  appButton: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.coral,
    borderRadius: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.white,
    alignSelf: 'center',
    fontFamily: 'NunitoSans_700Bold',
  },
});
