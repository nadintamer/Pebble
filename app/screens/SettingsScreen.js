import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, Button, View, StyleSheet, TextInput, Dimensions, Image, Switch, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps'
import DateTimePicker from '@react-native-community/datetimepicker'; //https://github.com/react-native-datetimepicker/datetimepicker
import ToggleSwitch from 'toggle-switch-react-native'
import { AsyncStorage } from 'react-native';

import CustomIcon from '../components/CustomIcon'
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SettingsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [firstChild, setFirstChild] = useState(false);
  const [dueDate, setDueDate] = useState(new Date());
  const [babyGender, setBabyGender] = useState('');
  const [doctorNumber, setDoctorNumber] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShow(Platform.OS === 'ios');
    setDueDate(currentDate);
    setStorage(currentDate, 'dueDate');
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  useEffect(() => {
    readSettings();
  }, []);

  const setStorage = async (newValue, category) => {
    try {
      await AsyncStorage.setItem(category, JSON.stringify(newValue));
    } catch (e) {
      console.error(e);
    }
  }

  const setSettingsFromStorage = (newValue, category) => {
    switch (category) {
      case 'name':
        setName(JSON.parse(newValue));
        break;
      case 'firstChild':
        setFirstChild(JSON.parse(newValue));
        break;
      case 'dueDate':
        let newDueDate = new Date(JSON.parse(newValue));
        setDueDate(newDueDate);
        break;
      case 'babyGender':
        setBabyGender(JSON.parse(newValue));
        break;
      case 'doctorPhone':
        setDoctorNumber(JSON.parse(newValue));
        break;
    }
  }

  const readSettings = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      if (name !== null) {
        setSettingsFromStorage(name, 'name');
      }
      const firstChild = await AsyncStorage.getItem('firstChild');
      if (firstChild !== null) {
        setSettingsFromStorage(firstChild, 'firstChild');
      }
      const dueDate = await AsyncStorage.getItem('dueDate');
      if (dueDate !== null) {
        setSettingsFromStorage(dueDate, 'dueDate');
      }
      const babyGender = await AsyncStorage.getItem('babyGender');
      if (babyGender !== null) {
        setSettingsFromStorage(babyGender, 'babyGender');
      }
      const doctorPhone = await AsyncStorage.getItem('doctorPhone');
      if (doctorPhone !== null) {
        setSettingsFromStorage(doctorPhone, 'doctorPhone');
      }
    } catch (e) {
      console.error(e);
    }
  }

  const toggleSwitch = () => {
    let isFirst = firstChild;
    setFirstChild(previousState => !previousState);
    setStorage(!isFirst, 'firstChild');
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <ScrollView keyboardShouldPersistTaps="handled" >
        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Name</Text>
          <View style={styles.textInputView}>
            <TextInput
              value={name}
              onChangeText={(name) => {
                setName(name);
                setStorage(name, 'name');
              }}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>First Child?</Text>
          <View style={styles.toggleView}>
            <Switch
              trackColor={{ false: "#767577", true: Colors.darkPurple }}
              thumbColor={Colors.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={firstChild}
              style={styles.switch}
            />
          </View>
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Due Date</Text>
          <View style={styles.datePickerView}>
            <DateTimePicker
              style={styles.datePicker}
              testID="dateTimePicker"
              value={dueDate}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              onPress={showDatePicker}
            />
          </View>
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Baby's Gender</Text>
          <View style={styles.textInputView}>
            <TextInput
              value={babyGender}
              onChangeText={(babyGender) => {
                setBabyGender(babyGender);
                setStorage(babyGender, 'babyGender');
              }}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.settingView}>
          <Text style={styles.descriptorText}>Doctor's Phone Number</Text>
          <View style={styles.textInputView}>
            <TextInput
              keyboardType='numeric'
              value={doctorNumber}
              onChangeText={(doctorNumber) => {
                setDoctorNumber(doctorNumber);
                setStorage(doctorNumber, 'doctorPhone');
              }}
              style={styles.textInput}
            />
          </View>
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
  textInputView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  textInput: {
    textAlign: 'right',
    width: 200,
    height: 44,
    padding: 8,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: Colors.settingsDarkGrey,
  },
  descriptorText: {
    margin: 10,
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
    color: Colors.grey,
  },
  bottomText: {
    alignSelf: 'center',
    margin: 60,
    fontFamily: 'NunitoSans_400Regular_Italic',
    fontSize: 16,
    color: Colors.grey,
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  datePickerView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  datePicker: {
    width: 100,
    color: 'white',
    tintColor: 'white',
    backgroundColor: 'white',
    marginBottom: 5
  }
});
