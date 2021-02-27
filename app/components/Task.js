import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon'

export default function Task(props) {
  const [done, setDone] = useState(props.completed);
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

  const [checkboxIcon, setCheckboxIcon] = useState(icons[done]);

  const toggleIcon = () => {
    if (done === "completed") {
      setDone("notCompleted");
    } else {
      setDone("completed");
    }
    setCheckboxIcon(icons[done]);
  };

  return (
    <TouchableOpacity onPress={toggleIcon}>
      <View style={styles.task}>
        <CustomIcon name={checkboxIcon.name} size={checkboxIcon.size} color={checkboxIcon.color}/>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
  },
  taskText: {
    margin: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  }
});
