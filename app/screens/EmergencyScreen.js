import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Colors from '../themes/Colors';
import { useIsFocused } from "@react-navigation/native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EmergencyScreen() {
    <SafeAreaView style={styles.homeContainer}>
    
    <View style={styles.callDoctor}>
    <View style={styles.profilePictureContainer}>
      <Image
        source={require("../../assets/images/callDoctorIcon.png")}
        style={{ width: 60, height: 60}}
      />
    </View>
    <Text style={styles.boldedText}> Call Doctor </Text>
    </View>
    
    <View style={styles.hospitalDirections}>
    <View style={styles.profilePictureContainer}>
      <Image
        source={require("../../assets/images/HospitalDirections.png")}
        style={{ width: 60, height: 60}}
      />
    </View>
    <Text style={styles.boldedText}> Directions to Nearest Hospital </Text>
    </View>
    
    <View style={styles.textFriends}>
    <View style={styles.profilePictureContainer}>
      <Image
        source={require("../../assets/images/TextFamilyIcon.png")}
        style={{ width: 60, height: 60}}
      />
    </View>
    <Text style={styles.boldedText}> Text Family & Friends </Text>
    </View>
    
    </SafeAreaView>

}
const styles = StyleSheet.create({
homeContainer: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: Colors.white,
},
boldedText: {
  fontWeight: "bold"
},
callDoctor: {

},
    hospitalDirections : {
        
    },
    textFriends : {
        
    },
});
