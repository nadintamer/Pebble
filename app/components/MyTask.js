import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon'

export default function MyTask(props) {
  const [editing, setEditing] = useState(false);
  const [userInput, setUserInput] = useState(props.task.text);

  const icons = {
    completed: {
      name: 'completed',
      size: 30,
      color: Colors.darkPurple,
    },
    notCompleted: {
      name: 'not-completed',
      size: 30,
      color: Colors.grey,
    },
  };

  const checkboxIcon = icons[props.task.status];

  const editItem = () => {
    setEditing(false);

    // call callback function to update the todos state in TasksScreen.js
    props.editToDo(props.index, userInput)
  }

  return (
    <View>
    { editing ?
      <View style={styles.task}>
        <TextInput
          style={styles.taskText}
          onChangeText={text => setUserInput(text)}
          value={userInput}
          onSubmitEditing={() => editItem()}
          //focused=true
        />
      </View>
      :
      <TouchableHighlight
        onPress={() => { props.completeTask(props.task) }}
        underlayColor='white'>
        <View style={styles.task}>
          <CustomIcon name={checkboxIcon.name} size={checkboxIcon.size} color={checkboxIcon.color}/>
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
    height: 84,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  taskText: {
    margin: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  }
});
