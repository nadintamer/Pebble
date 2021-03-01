import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Colors from '../themes/Colors';
import ProfileButton from '../components/ProfileButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SavedCardsScreen() {
    
  return (
    <View style={styles.homeContainer}>
          <View style={styles.actionCard}>
          <Text style={styles.boldedText}>
            <Text>Morning Sickness</Text>
          </Text>
          <Text>Despite its name, morning sickness does not only occur in the morning.</Text>
          </View>
          
          <View style={styles.actionCard}>
          <Text style={styles.boldedText}>
            <Text>Nausea Symptoms</Text>
          </Text>
          <Text>Morning sickness, vomiting, and more</Text>
          </View>
          
          <View style={styles.actionCard}>
          <Text style={styles.boldedText}>
            <Text>Covaude Syndrome</Text>
          </Text>
          <Text>The manifestation of pregnancy in men</Text>
          </View>
          
          <View style={styles.actionCard}>
          <Text style={styles.boldedText}>
            <Text>Hyperemis Gravidarum</Text>
          </Text>
          <Text>Extreme Morning Sickness: dehydration, weight loss, and more</Text>
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
  alignItems: 'stretch',
  flexDirection: 'column',
  backgroundColor: Colors.lightPurple,
  height: windowHeight * 0.3,
  width: windowWidth * 0.8,
  borderRadius: 20,
},
boldedText: {
  fontWeight: "bold"
},
});
