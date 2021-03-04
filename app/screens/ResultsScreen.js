import React from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, Video, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ResultScreen() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.homeContainer}>
              <Image style={styles.image} source={require("../../assets/images/communication.png")}></Image>
  
      <Text style={styles.content}>The b yourself, and recruit a support network.</Text>
  </SafeAreaView>
  </ScrollView>
  
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
  image: {
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.25,
    width: windowWidth,
  },
  content: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'NunitoSans_400Regular'
  }
  });
  