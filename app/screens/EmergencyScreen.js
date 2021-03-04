import React, { useState } from 'react';
import { Text, View, Image, TextInput, SafeAreaView, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Colors from '../themes/Colors';
import { useIsFocused } from "@react-navigation/native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EmergencyScreen() {
  return (
    <SafeAreaView style={styles.homeContainer}>
          <Image
            source={require("../../assets/images/Divider.png")}
            style={{ width: 430, height: 5}}
          />
    <View style={styles.callDoctor}>
    <View style={styles.pictureContainer}>
      <Image
        source={require("../../assets/images/call-doctor-icon.png")}
        style={{ width: 25, height: 25}}
      />
    </View>
    <Text style={styles.boldedText}> Call Doctor </Text>
    </View>
          
          <Image
            source={require("../../assets/images/Divider.png")}
            style={{ width: 430, height: 5}}
          />

    <View style={styles.hospitalDirections}>
    <View style={styles.pictureContainer}>
      <Image
        source={require("../../assets/images/hospital-directions.png")}
        style={{ width: 60, height: 60}}
      />
    </View>
          <Text style={styles.boldedText}> {"\n"} Directions to Nearest Hospital </Text>
    </View>
          <Image
            source={require("../../assets/images/Divider.png")}
            style={{ width: 430, height: 5}}
          />

    <View style={styles.textFriends}>
    <View style={styles.pictureContainer}>
      <Image
        source={require("../../assets/images/text-family-icon.png")}
        style={{ width: 60, height: 60}}
      />
    </View>
          <Text style={styles.boldedText}> {"\n"}Text Family & Friends </Text>
    </View>
          <Image
            source={require("../../assets/images/Divider.png")}
            style={{ width: 430, height: 5}}
          />
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
homeContainer: {
  flex: 0.5,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: Colors.white,
},
boldedText: {
  fontWeight: "bold",
  fontSize: 18,
fontFamily: 'NunitoSans_400Regular'

},
callDoctor: {
flexDirection: "row",
    justifyContent: "space-evenly"
},
    hospitalDirections : {
    flexDirection: "row",
    justifyContent: "space-evenly"
    },
    textFriends : {
    flexDirection: "row",
    justifyContent: "space-evenly"
    },
});
