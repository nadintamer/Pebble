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
          <Text style={styles.bodyText}>Ask employer about paternity leave</Text>
          <Text style={styles.bodyText}>Schedule tour of hospital </Text>
          <TouchableOpacity onPress={() => navigation.navigate('WeekInfo')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Go To Tasks</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.actionCard}>
          <Text style={styles.subheading}>Info</Text>
          <Text style={styles.bodyText}>Communication Tips</Text>
          <Text style={styles.bodyText}>Paternity Leave </Text>
          <TouchableOpacity onPress={() => navigation.navigate('WeekInfo')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Go To Tasks</Text>
          </TouchableOpacity>
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
    marginTop: 20,
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    marginTop: 15,
  },
  bodyText: {
    margin: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  },
  appButtonContainer: {
    backgroundColor: Colors.coral,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    fontFamily: "NunitoSans_700Bold",
  }
});