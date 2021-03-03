import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Colors from '../themes/Colors';
import ProfileButton from '../components/ProfileButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SavedCardsScreen() {

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.actionCard}>
          <Text style={styles.cardText}>{"\n"}
          <Text style={styles.boldedText}>  Morning Sickness {"\n"}{"\n"}</Text>
          <Text>  Despite its name, morning sickness does not {"\n"}  only occur in the morning.</Text>
        </Text>
      </View>

      <View style={styles.actionCard}>
          <Text style={styles.cardText}>{"\n"}
          <Text style={styles.boldedText}>  Nausea Symptoms {"\n"}{"\n"}</Text>
        <Text>  Morning sickness, vomiting, and more</Text>
          </Text>
      </View>

      <View style={styles.actionCard}>
          <Text style={styles.cardText}>{"\n"}
          <Text style={styles.boldedText}>  Covaude Syndrome {"\n"}{"\n"}</Text>
        <Text>  The manifestation of pregnancy in men</Text>
        </Text>
      </View>

      <View style={styles.actionCard}>
          <Text style={styles.cardText}>{"\n"}
          <Text style={styles.boldedText}>  Hyperemis Gravidarum {"\n"}{"\n"}</Text>
          <Text>  Extreme Morning Sickness: dehydration, {"\n"}  weight loss, and more</Text>
        </Text>
      </View>
    </SafeAreaView>
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
    height: windowHeight * 0.15,
    width: windowWidth * 0.9,
    borderRadius: 20,
    marginTop: 30
  },
  boldedText: {
    fontWeight: "bold"
  },
});
