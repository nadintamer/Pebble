import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Colors from '../themes/Colors';
import CustomIcon from '../components/CustomIcon'

export default function WeeklyTask(props) {
  const icons = {
    added: {
      name: 'minus',
      size: 24,
      color: Colors.darkPurple,
    },
    notAdded: {
      name: 'plus',
      size: 24,
      color: Colors.darkPurple,
    },
  };

  const addIcon = icons[props.added];

  const toggleAdded = () => {
    if (props.added === "added") {
      props.removeFromTasks();
    } else {
      props.addToTasks();
    }
  };

  return (
    <TouchableOpacity onPress={toggleAdded}>
      <View style={styles.task}>
        <CustomIcon name={addIcon.name} size={addIcon.size} color={addIcon.color}/>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
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
    margin: 5,
  },
  taskText: {
    margin: 10,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  }
});

//         <CustomIcon name={addIcon.name} size={addIcon.size} color={addIcon.color}/>
