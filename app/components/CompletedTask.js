import React, { useState, useEffect } from 'react';
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

export default function CompletedTask(props) {
  return (
    <TouchableHighlight
      onPress={() => {
        props.uncompleteTask(props.task);
      }}
      underlayColor='white'>
      <View style={styles.task}>
        <CustomIcon name="completed" size={30} color={Colors.darkPurple}/>
        <Text style={styles.taskText}>{props.task}</Text>
      </View>
    </TouchableHighlight>
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
