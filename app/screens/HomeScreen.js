import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.progressContainer}>
        <ProgressBar progress={0.5} color={Colors.darkPurple} />
      </View>

      <View style={styles.actionCardContainer}>
        <View style={styles.actionCard}>
          <Text style={styles.subheading}>This Week's Tasks</Text>
          <View style={styles.textView}>
            <Text style={styles.bodyText}>Ask employer about paternity leave</Text>
            <Text style={styles.bodyText}>Schedule tour of hospital </Text>
          </View>
          <View style={styles.appButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Tasks', { startingTab: 0 })} style={styles.appButton}>
              <Text style={styles.appButtonText}>Go To Tasks</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.actionCard}>
          <Text style={styles.subheading}>Info</Text>
          <View style={styles.textView}>
            <Text style={styles.bodyText}>Communication Tips</Text>
            <Text style={styles.bodyText}>Paternity Leave </Text>
          </View>
          <View style={styles.appButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('WeekInfo')} style={styles.appButton}>
              <Text style={styles.appButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
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
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionCard: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: 240,
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    marginTop: 15,
    marginBottom: 15,
  },
  bodyText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appButton: {
    width: '100%',
    backgroundColor: Colors.coral,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "NunitoSans_700Bold",
  }
});
