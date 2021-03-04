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
        <Image
          source={require("../../assets/images/morningSickness.png")}
          style={{ width: 60, height: 60, margin: 7 }}
        />
        <View style={styles.cardText}>
          <Text style={styles.subheading}>Morning Sickness </Text>
          <Text style={styles.bodyText}>Despite its name, morning sickness does not only occur in the morning.</Text>
        </View>
      </View>

      <View style={styles.actionCard}>
        <Image
          source={require("../../assets/images/nausea.png")}
          style={{ width: 60, height: 60, margin: 7 }}
        />
        <View style={styles.cardText}>
          <Text style={styles.subheading}>Nausea Symptoms</Text>
          <Text style={styles.bodyText}>Morning sickness, vomiting, and more</Text>
        </View>
      </View>

      <View style={styles.actionCard}>
        <Image
          source={require("../../assets/images/covaude.png")}
          style={{ width: 60, height: 60, margin: 7 }}
        />
        <View style={styles.cardText}>
          <Text style={styles.subheading}>Covaude Syndrome </Text>
          <Text style={styles.bodyText}>The manifestation of pregnancy in men</Text>
        </View>
      </View>

      <View style={styles.actionCard}>
        <Image
          source={require("../../assets/images/hyperemesis.png")}
          style={{ width: 60, height: 60, margin: 7 }}
        />

        <View style={styles.cardText}>
          <Text style={styles.subheading}>Hyperemis Gravidarum </Text>
          <Text style={styles.bodyText}>Extreme Morning Sickness: dehydration, weight loss, and more</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.15,
    width: windowWidth * 0.9,
    borderRadius: 20,
    marginTop: 30,
  },
  boldedText: {
    fontWeight: "bold"
  },
  cardText: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  pictureContainer: {
    marginTop: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 20,
    marginTop: 15,
  },
  bodyText: {
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular',
  },
});
