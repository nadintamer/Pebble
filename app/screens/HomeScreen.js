import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon';
import CalendarStrip from 'react-native-calendar-strip'; // scrollbar experimentation

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>10 Weeks Left</Text>
        <View style={styles.progressBarContainer}>
          <ProgressBar progress={0.75} color={Colors.darkPurple} style={styles.progressBar}/>
          <CustomIcon name="baby" size={30} color={Colors.coral} style={styles.babyIcon}/>
        </View>
      </View>

      <View style={styles.actionCardContainer}>
        <View style={styles.actionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>This Week's Tasks</Text>
            <View style={styles.bulletRow}>
              <MaterialCommunityIcons name="circle-medium" size={24} color="black" style={styles.bullet}/>
              <Text style={styles.bodyText}>Ask employer about paternity leave</Text>
            </View>
            <View style={styles.bulletRow}>
              <MaterialCommunityIcons name="circle-medium" size={24} color="black" style={styles.bullet}/>
              <Text style={styles.bodyText}>Schedule tour of hospital 🏥</Text>
            </View>
          </View>
          <View style={styles.appButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Tasks', { startingTab: 0 })} style={styles.appButton}>
              <Text style={styles.appButtonText}>Go To Tasks</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.actionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Info</Text>
            <View style={styles.bulletRow}>
              <MaterialCommunityIcons name="circle-medium" size={24} color="black" style={styles.bullet}/>
              <Text style={styles.bodyText}>Communication Tips</Text>
            </View>
            <View style={styles.bulletRow}>
              <MaterialCommunityIcons name="circle-medium" size={24} color="black" style={styles.bullet}/>
              <Text style={styles.bodyText}>Paternity leave</Text>
            </View>
          </View>
          <View style={styles.appButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('WeekInfo')} style={styles.appButton}>
              <Text style={styles.appButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
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
  progressContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.1,
    width: '100%',
  },
  progressText: {
    width: '90%',
    color: '#707281',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    width: windowWidth * 0.9,
    height: 20,
    borderRadius: 40,
    backgroundColor: '#E8E9EF',
  },
  babyIcon: {
    left: windowWidth * 0.9 - 28,
    position: 'absolute',
  },
  actionCardContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionCard: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: 240,
    width: '100%',
    borderRadius: 20,
    marginTop: 20,
  },
  textContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  bulletRow: {
    flexDirection: 'row',
  },
  bullet: {
    marginRight: 18,
  },
  heading: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    marginBottom: 26,
  },
  bodyText: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 16,
    marginBottom: 20,
  },
  appButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    marginTop: 6,
  },
  appButton: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.coral,
    borderRadius: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.white,
    alignSelf: 'center',
    fontFamily: 'NunitoSans_700Bold',
  },
});
