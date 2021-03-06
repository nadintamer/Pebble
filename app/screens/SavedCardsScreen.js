import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Colors from '../themes/Colors';
import ProfileButton from '../components/ProfileButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SavedCardsScreen() {
  const [savedCards, setSavedCards] = useState([]);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/morningSickness2.png")}
                style={{ width: '100%', height: '78%', margin:0 }}
              />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Morning Sickness </Text>
            <Text style={styles.bodyText}>{"\n"}Despite its name, morning sickness does not only occur in the morning.</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/nausea2.png")}
              style={{ width: '100%', height: '78%', margin:0  }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Nausea Symptoms</Text>
            <Text style={styles.bodyText}>{"\n"}Morning sickness, vomiting, and more</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/covaude2.png")}
              style={{ width: '100%', height: '78%', margin:0 }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Covaude Syndrome </Text>
            <Text style={styles.bodyText}>{"\n"}The manifestation of pregnancy in men</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/hyperemesis2.png")}
              style={{ width: '100%', height: '78%', margin:0  }}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={styles.subheading}>Hyperemis Gravidarum </Text>
            <Text style={styles.bodyText}>{"\n"}Extreme Morning Sickness: dehydration, weight loss, and more</Text>
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
    marginTop: 32,
    zIndex: 1
  },
  actionBubble: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    height: windowHeight * 0.104,
    opacity: 0.2,
    width: '25%',
    borderRadius: 20,
    marginTop: 20,
    zIndex: 2
  },
  imageContainer: {
    flex: 1,
    /*
    marginTop: (windowHeight * 0.104 - 110)/2.0,
    marginBottom: (windowHeight * 0.104 - 110)/2.0,
    */
    marginTop: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3
  },
  scrollView: {
    width: '90%',
    backgroundColor: Colors.white,
  },
  cardText: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    opacity: 0.8
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
  },
  bodyText: {
    fontSize: 11,
    fontFamily: 'NunitoSans_400Regular',
  },
});
