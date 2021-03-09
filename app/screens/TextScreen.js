// could maybe combine with call screen but have to implement multiple people functionality so maybe not
// THIS IS NOW USELESS but will leave it here in case of multiperson functionality although tbh that shouldn't need it's own component either i'm just scared
import React, { Component } from 'react';
 
import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';
import Colors from '../themes/Colors';

export default class mainapp extends Component {
 
 
  sendMessage = () => {
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
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={this.sendMessage} activeOpacity={0.7} style={styles.button} >
          <Text style={styles.TextStyle}>Alert Your Contacts!</Text>
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