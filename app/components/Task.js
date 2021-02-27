import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../themes/Colors';

export default function Task(props) {
  return (
    <View style={styles.task}>
      <Text style={styles.taskText}>{props.text}</Text>
    </View>
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
  }
});
