import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileButton(props) {
  const images = {
    saved: require("../../assets/images/saved.png"),
    faq: require("../../assets/images/faq.png"),
  }

  return (
    <View style={styles.button}>
      <View style={styles.iconSquare}>
        <Image source={images[props.image]}/>
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '100%',
    height: windowHeight * 0.15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.settingsLightGrey,
    borderRadius: 20,
  },
  iconSquare: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.settingsDarkGrey,
    height: windowHeight * 0.104,
    width: windowWidth * 0.216,
    borderRadius: 20,
    marginLeft: windowWidth * 0.05,
    marginRight: 15,
  },
  text: {
    margin: 10,
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
    opacity: 0.8
  }
});
