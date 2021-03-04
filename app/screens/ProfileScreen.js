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
      <TouchableOpacity style={styles.emergencyButton} onPress={() => navigation.navigate('Emergency')}>
          <Text style={styles.emergencyText}>EMERGENCY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileButton} onPress= {() => navigation.navigate('Saved')}>
        <ProfileButton text="Saved" image="saved"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileButton} onPress= {() => navigation.navigate('FAQ')}>
        <ProfileButton text="FAQ" image="faq"/>
      </TouchableOpacity>
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
  }
});
