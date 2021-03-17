import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon'
const windowHeight = Dimensions.get('window').height;

export default function MyTask(props) {
  const editItem = () => {
    props.setEditing(props.index, false);

    // call callback function to update the todos state in TasksScreen.js
    props.editToDo(props.index, props.userInput)
  }

  return (
    <View>
    { props.task.editing ?
      <View style={styles.task}>
        <CustomIcon name="not-completed" size={30} color={Colors.grey}/>
        <TextInput
          style={styles.taskText}
          onChangeText={(text) => {
            props.setUserInput(text);
          }}
          value={props.userInput}
          onSubmitEditing={() => editItem()}
          onEndEditing={() => editItem()}
          autoFocus={true}
        />
      </View>
      :
      <TouchableHighlight
        onPress={() => {
          props.completeTask(props.task);
        }}
        underlayColor='white'>
        <View style={styles.task}>
          <CustomIcon name="not-completed" size={30} color={Colors.grey}/>
          <Text style={styles.taskText}>{props.task.text}</Text>
        </View>
      </TouchableHighlight>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
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
  taskText: {
    margin: 15,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    opacity: 0.8
  }
});
