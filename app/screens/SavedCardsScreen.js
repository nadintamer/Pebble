import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Colors from '../themes/Colors';
import ProfileButton from '../components/ProfileButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SavedCardsScreen() {

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/morningSickness.png")}
              style={{ width: 60, height: 60, margin: 7 }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Morning Sickness </Text>
            <Text style={styles.bodyText}>Despite its name, morning sickness does not only occur in the morning.</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/nausea.png")}
              style={{ width: 60, height: 60, margin: 7 }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Nausea Symptoms</Text>
            <Text style={styles.bodyText}>Morning sickness, vomiting, and more</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/covaude.png")}
              style={{ width: 60, height: 60, margin: 7 }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Covaude Syndrome </Text>
            <Text style={styles.bodyText}>The manifestation of pregnancy in men</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/hyperemesis.png")}
              style={{ width: 60, height: 60, margin: 7 }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Hyperemis Gravidarum </Text>
            <Text style={styles.bodyText}>Extreme Morning Sickness: dehydration, weight loss, and more</Text>
          </View>
        </View>
      </ScrollView>
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
    width: '100%',
    borderRadius: 20,
    marginTop: 30,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 4,
    marginRight: 10,
  },
  boldedText: {
    fontFamily: 'NunitoSans_700Bold',
  },
  cardText: {
    fontFamily: 'NunitoSans_400Regular',
  },
  pictureContainer: {
    marginTop: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollView: {
    width: '90%',
    backgroundColor: Colors.white,
  },
  cardText: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 10,
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 20,
  },
  bodyText: {
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular',
  },
  scrollView: {
    width: '90%',
    backgroundColor: Colors.white,
  },
});
