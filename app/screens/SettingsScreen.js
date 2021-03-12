import React, { useState } from 'react';
import { Text, SafeAreaView, Button, View, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps'
import { Switch } from 'react-native-switch';
import DateTimePicker from '@react-native-community/datetimepicker'; //https://github.com/react-native-datetimepicker/datetimepicker
import ToggleSwitch from 'toggle-switch-react-native'



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
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  // this stuff isn't necessary sorry will clean up later
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };



  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView keyboardShouldPersistTaps="handled" >
        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Name: </Text>
          <TextInput
            value={name}
            onChangeText={(name) => setName(name)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>First Child: </Text>
          <View style={styles.toggleView}>
            <ToggleSwitch
              isOn={isEnabled}
              onColor={Colors.darkPurple}
              offColor={Colors.grey}
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={toggleSwitch}
            />
          </View>
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Due Date: </Text>
          <View>

            <DateTimePicker style={styles.datePicker}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              onPress={showDatepicker}
              />
          </View>
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Baby's Gender: </Text>
          <TextInput
            value={babyGender}
            onChangeText={(babyGender) => setBabyGender(babyGender)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Doctor's Number: </Text>
          <TextInput
            keyboardType='numeric'
            value={doctorNumber}
            onChangeText={(doctorNumber) => setDoctorNumber(doctorNumber)}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.bottomText}>All changes are autosaved. </Text>
      </ScrollView>
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
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: Colors.settingsDarkGrey,
  },

  descriptorText: {
    margin: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: Colors.grey,
    fontWeight: 'bold' // not working
  },

  descriptionText: {
    width: 200,
    height: 44,
    padding: 8,

  },

  bottomText: {
    margin: 60,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: Colors.grey,
    fontStyle: 'italic', //also not working
  },

  settingView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
  },
  toggleView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  datePicker: { 
    width: 100,
    color: 'white',
    tintColor: 'white',
    backgroundColor: 'white',
    marginBottom: 5
  }
});

/*<Switch
           ios_backgroundColor="blue"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />*/