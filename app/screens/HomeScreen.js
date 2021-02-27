import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.progressContainer}>
        <ProgressBar progress={0.5} color={Colors.darkPurple} />
      </View>

      <View style={styles.actionCardContainer}>
        <View style={styles.actionCard}>
          <Text>This Week's Tasks</Text>
        </View>

        <View style={styles.actionCard}>
          <Text>Info</Text>
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
    justifyContent: 'space-between',
  },
  progressContainer: {
    flex: 0.3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.3,
    width: windowWidth * 0.8,
  },
  actionCardContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionCard: {
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.3,
    width: windowWidth * 0.8,
    borderRadius: 20,
  },
});
//    position: 'absolute', left: windowWidth/2, height: windowHeight/2, justifyContent:'center',alignItems:'center'
