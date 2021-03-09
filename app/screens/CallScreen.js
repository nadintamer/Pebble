// Linking https://reactnativecode.com/open-phone-number-in-dial-screen/
//THIS IS NOW USELESS can get rid of later
import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import Colors from '../themes/Colors';

export default class mainapp extends Component {
 
  dialCall = () => {
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${5033172937}'; //hardcoded my number in here for now lmao
    }
    else {
      phoneNumber = 'telprompt:${5033172937}';
    }
    Linking.openURL(phoneNumber);
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.TextStyle}>Press to Call Your Doctor ;)</Text>
        </TouchableOpacity>
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
 
    width: '80%',
    padding: 6,
    backgroundColor: Colors.darkPurple,
    borderRadius: 7,
  },
 
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  }
 
});