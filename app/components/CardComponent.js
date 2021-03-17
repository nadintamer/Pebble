import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CardComponent(props) {
  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Article", { articleInfo: props.article})}>
        <View style={styles.actionCard}>
          <View style={styles.imageBackground}>
            <View style={styles.imageContainer}>
              <Image
                source={props.article.icon}
                style={{ width: '100%', height: '100%', margin: 0, resizeMode: 'contain' }}
              />
            </View>
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>{props.article.title}</Text>
            <Text style={styles.bodyText}>{"\n"}{props.article.subtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.15,
    width: '100%',
    borderRadius: 20,
    marginBottom: 32,
  },
  imageBackground: {
    height: windowHeight * 0.104,
    width: windowWidth * 0.216,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    marginLeft: windowWidth * 0.05,
    backgroundColor: Colors.lightPurple,
    borderRadius: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
  },
  cardText: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 15,
    opacity: 0.8
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 16,
  },
  bodyText: {
    fontSize: 11,
    fontFamily: 'NunitoSans_400Regular',
  },
});
