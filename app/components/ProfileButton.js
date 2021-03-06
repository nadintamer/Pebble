import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Colors from '../themes/Colors';

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
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.settingsLightGrey,
    borderRadius: 20,
  },
  iconSquare: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.settingsDarkGrey,
    width: 81,
    height: 86,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  text: {
    margin: 10,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  }
});
