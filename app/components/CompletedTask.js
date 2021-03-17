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
    color: Colors.grey,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    opacity: 0.8
  }
});
