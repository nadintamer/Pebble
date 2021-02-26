import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeStackComponent() {
  return (

    <View style={styles.homeContainer}>
      <View style={styles.progressContainer}>
        <ProgressBar progress={0.5} color={Colors.red800} styles={{ position: 'absolute' }} />
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
    flex: 0.1,
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
    backgroundColor: 'rgba(50, 49, 177, 0.1)',
    height: windowHeight * 0.3,
    width: windowWidth * 0.8,
    borderRadius: 20,
  },
});
//    position: 'absolute', left: windowWidth/2, height: windowHeight/2, justifyContent:'center',alignItems:'center'
