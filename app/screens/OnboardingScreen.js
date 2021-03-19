import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon';
import HomeScreen from '../screens/HomeScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OnboardingScreen(props) {
  const images = {
    onboarding1: require("../../assets/images/onboard1.png"),
    onboarding2: require("../../assets/images/onboard2.png"),
    onboarding3: require("../../assets/images/onboard3.png"),
    onboarding4: require("../../assets/images/onboard4.png"),
    onboarding5: require("../../assets/images/onboard5.png"),
  }
  const isFirst = props.info.image == 'onboarding1';
  const imageWidth = isFirst ? 280 : 375;
  const imageHeight = isFirst ? 280 : 375;

  const getOnboardingButton = () => {
    let viewToReturn = null;
    if (props.info.image == 'onboarding1') {
      viewToReturn = (
        <View style={styles.appButtonContainer}>
          <TouchableOpacity onPress={() => props.setOpenedApp(true)} style={[{ backgroundColor: Colors.grey }, styles.appButton]}>
                <Text style={styles.appButtonText}>Skip</Text>
              </TouchableOpacity>
        </View>
      );
    } else if (props.info.image == 'onboarding5') {
      viewToReturn = (
        <View style={styles.appButtonContainer}>
          <TouchableOpacity onPress={() => props.setOpenedApp(true)} style={[{ backgroundColor: Colors.coral }, styles.appButton]}>
                <Text style={styles.appButtonText}>Get Started</Text>
              </TouchableOpacity>
        </View>
      );
    }

    return viewToReturn;
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={images[props.info.image]}
          style={{ width: imageWidth, height: imageHeight }}
        />
      </View>

      <Text style={styles.heading}>{props.info.title}</Text>
      <Text style={styles.description}>{props.info.description}</Text>

      {getOnboardingButton()}
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
    justifyContent: 'center',
    width: 375,
    height: 375,
  },
  heading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    marginTop: 0.02 * windowHeight,
    width: '89%',
    textAlign: 'center',
  },
  description: {
    height: 90,
    width: '76%',
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 16,
    marginTop: 0.05 * windowHeight,
    marginBottom: 0.11 * windowHeight
  },
  appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginBottom: 0.04 * windowHeight,
  },
  appButton: {
    width: 0.42 * windowWidth,
    height: 0.064 * windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.white,
    alignSelf: 'center',
    fontFamily: 'NunitoSans_700Bold',
  },
});
