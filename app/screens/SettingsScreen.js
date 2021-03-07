import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'

import CustomIcon from '../components/CustomIcon'


import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SettingsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [firstChild, setFirstChild] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [babyGender, setBabyGender] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');


  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.settingView}>
      <Text>Name: </Text>
        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.settingView}>
        <Text>First Child: </Text>
        <TextInput
          value={firstChild}
          onChangeText={(firstChild) => setFirstChild(firstChild)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.settingView}>
        <Text>Due Date: </Text>
        <TextInput
          value={dueDate}
          onChangeText={(dueDate) => setDueDate(dueDate)}
          style={styles.textInput}
        />
      </View>
      
      <View style={styles.settingView}>
        <Text>Baby's Gender: </Text>
        <TextInput
          value={babyGender}
          onChangeText={(babyGender) => setBabyGender(babyGender)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.settingView}>
        <Text>Doctor's Number: </Text>
        <TextInput
          value={doctorNumber}
          onChangeText={(doctorNumber) => setDoctorNumber(doctorNumber)}
          style={styles.textInput}
        />
      </View>
      <Text>All changes are autosaved. </Text>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  textInput: {
    width: 200,
    height: 44,
    padding: 8,
  },

  descriptionText: {
    width: 200,
    height: 44,
    padding: 8,
  },

  settingView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: windowWidth * 0.9,
    height: windowHeight*0.1,
  },
});

