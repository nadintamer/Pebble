import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardComponent(props) {
  const getLinks = () => {
    let viewToReturn = null;
    if (props.faq.hasOwnProperty('links')) {
      let linksArr = props.faq.links;
      viewToReturn = linksArr.map(link => {
         return (
           <Text key={link.id} style={styles.cardLink} onPress={() => Linking.openURL(link.link)}>{link.text}</Text>
         );
       });
    }
    return viewToReturn;
  }
  return (
    <View style={styles.homeContainer}>
      <View style={styles.actionCard}>
        <View style={styles.textContainer}>
          <Text style={styles.boldedText}>{props.faq.question}{"\n"}</Text>
          <Text style={styles.cardText}>{props.faq.answer}</Text>
          {getLinks()}
        </View>
      </View>
    </View>
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
  actionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.lightGrey,
    height: windowHeight * 0.17,
    width: '100%',
    borderRadius: 20,
    flex: 3,
    marginTop: 32,
  },
  textContainer: {
    width: '90%',
    opacity: 0.8
  },
  boldedText: {
    fontFamily: 'NunitoSans_700Bold',
  },
  cardText: {
    fontFamily: 'NunitoSans_400Regular',
  },
  cardLink: {
    fontFamily: 'NunitoSans_400Regular',
    color: Colors.darkPurple,
    textDecorationLine: 'underline',
  },
});
