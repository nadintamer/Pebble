// // Linking https://reactnativecode.com/open-phone-number-in-dial-screen/

import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Linking, SafeAreaView, Platform, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Colors from '../themes/Colors';
import { useIsFocused } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EmergencyScreen( {navigation}) {
  let dialCall = () => {
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${6099377312}'; //hardcoded my number in here for now lmao
    }
    else {
      phoneNumber = 'telprompt:${6099377312}';
    }
    Linking.openURL(phoneNumber);
  };

  let sendMessage = () => {
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'sms:${5033172937}'; //hardcoded my number in here for now lmao
    }
    else {
      phoneNumber = 'telprompt:5033172937';
    }
    const separator = Platform.OS === 'ios' ? '&' : '?'

    const url = `sms:${phoneNumber}${separator}body=${"i'm having a child bye"}`
     Linking.openURL(url)
    //Linking.openURL(phoneNumber);
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <TouchableOpacity style={styles.rowContainer} onPress={dialCall}>
        <View style={styles.pictureContainer}>
          <Image
            source={require("../../assets/images/call-doctor-icon.png")}
            style={{ width: 30, height: 30}}
          />
        </View>
        <Text style={styles.boldedText}>Call doctor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowContainer} onPress={() => navigation.navigate('Map')}>
        <View style={styles.pictureContainer}>
          <Image
            source={require("../../assets/images/hospital-directions.png")}
            style={{ width: 30, height: 30}}
          />
        </View>
        <Text style={styles.boldedText}>Directions to nearest hospital</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowContainer} onPress={sendMessage}>
        <View style={styles.pictureContainer}>
          <Image
            source={require("../../assets/images/text-family-icon.png")}
            style={{ width: 35, height: 35}}
          />
        </View>
        <Text style={styles.boldedText}>Text family and friends</Text>
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
  boldedText: {
    fontSize: 18,
    fontFamily: 'NunitoSans_400Regular',
  },
  rowContainer: {
    height: 100,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: Colors.lightGrey,
  },
  pictureContainer: {
    width: 40,
    height: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
