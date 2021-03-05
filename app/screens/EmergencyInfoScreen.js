import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Colors from '../themes/Colors';
import ProfileButton from '../components/ProfileButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.profilePictureContainer}>
        <Image
          source={require("../../assets/images/penguin-avatar.png")}
          style={{ width: 165, height: 165}}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Brian Lewis</Text>
      </View>
      <View style={styles.infoIcon}>
          <Image
              source={require("../../assets/images/infoIcon.png")}
              style={{ width: 28, height: 28, marginBottom: 16}}
          />
      </View>
      <View style={styles.emergencyButton}>
          <Text style={styles.emergencyText}>EMERGENCY</Text>
      </View>
      <View style={styles.profileButton}>
        <ProfileButton text="Saved" image="saved"/>
      </View>
      <View style={styles.profileButton}>
        <ProfileButton text="FAQ" image="faq"/>
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
    opacity: 0.25
  },
  profilePictureContainer: {
    marginTop: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameContainer: {
    marginBottom: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
  },
  emergencyButton: {
    width: '90%',
    height: 52,
    marginBottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.coral,
    borderRadius: 20,
  },
  emergencyText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: Colors.white,
  },
  profileButton: {
    width: '90%',
    height: 126,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  }
});
