import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Button, FlatList } from 'react-native';
import Colors from '../themes/Colors';

import TasksSegmentedControl from "../components/TasksSegmentedControl";
import Task from "../components/Task"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TasksScreen() {
  const [index, setIndex] = useState(1);
  const [weeklyTasks, setWeeklyTasks] = useState(["Task 1", "Task 2"]);
  const [myTasks, setMyTasks] = useState(["Task 3", "Task 4"]);

  const renderTask = ({ index, item }) => {
    return <Task text={item}/>;
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.segmentedControlContainer}>
        <TasksSegmentedControl
          index={index}
          setIndex={setIndex}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList
            data={index === 0 ? weeklyTasks : myTasks}
            renderItem={renderTask}
            keyExtractor={(item, index) => keyExtractor(index)}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  segmentedControlContainer: {
    width: '90%',
    height: '6%',
    margin: 5,
  },
  listContainer: {
    width: '90%',
  }
});
