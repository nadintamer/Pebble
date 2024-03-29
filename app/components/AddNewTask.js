import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon'

const windowHeight = Dimensions.get('window').height;

export default function AddNewTask(props) {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.taskContainer}>
      <CustomIcon name="pen" size={24} color={Colors.darkPurple} style={{ opacity: 0.5 }}/>
      <TextInput
        onChangeText={text => setText(text)}
        value={text}
        borderColor="transparent"
        placeholder="Add a new task..."
        style={styles.taskInput}
        placeholderTextColor={text.length === 0 ? Colors.darkPurple : Colors.black}
        opacity={text.length === 0 ? 0.5 : 1}
        onSubmitEditing={(event) => {
          props.addNewTask(event.nativeEvent.text);
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    width: '100%',
    height: windowHeight * 0.104,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  taskInput: {
    width: '100%',
    height: 84,
    margin: 15,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  }
});
