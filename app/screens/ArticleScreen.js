import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ArticleScreen() {
  return (
    <Text>Article goes here</Text>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
