// Linking https://reactnativecode.com/open-phone-number-in-dial-screen/
import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
 
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
          <Text style={styles.TextStyle}>Press to Call Your Doctor (warning it's actually jessica's number rn but like sure call me)</Text>
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
    backgroundColor: '#FF6F00',
    borderRadius: 7,
  },
 
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  }
 
});