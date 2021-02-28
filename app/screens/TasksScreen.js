import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Button, FlatList } from 'react-native';
import Colors from '../themes/Colors';

import TasksSegmentedControl from "../components/TasksSegmentedControl";
import WeeklyTask from "../components/WeeklyTask"
import MyTask from "../components/MyTask"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TasksScreen() {
  const [index, setIndex] = useState(1);
  const [addedTasks, setAddedTasks] = useState([]);
  const [notAddedTasks, setNotAddedTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);
  const [myTasks, setMyTasks] = useState(["Task 5", "Task 6"]);

  const renderWeeklyTask = ({ item, index }, added) => {
    return (
      <WeeklyTask
        text={item}
        addToTasks={() => addToMyTasks(index, item)}
        removeFromTasks={() => removeFromMyTasks(index, item)}
        added={added}
      />
    );
  };

  const renderMyTask = ({ index, item }) => {
    return <MyTask text={item} />;
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  const addToMyTasks = (index, item) => {
    let newNotAddedTasks = [...notAddedTasks];
    newNotAddedTasks.splice(index, 1);
    setNotAddedTasks(newNotAddedTasks);

    let newAddedTasks = [...addedTasks];
    newAddedTasks.push(item);
    setAddedTasks(newAddedTasks);

    let newMyTasks = [...myTasks];
    newMyTasks.push(item);
    setMyTasks(newMyTasks);
  };

  const removeFromMyTasks = (index, item) => {
    let newAddedTasks = [...addedTasks];
    newAddedTasks.splice(index, 1);
    setAddedTasks(newAddedTasks);

    let newMyTasks = [...myTasks];
    let myTasksIndex = newMyTasks.indexOf(item);
    newMyTasks.splice(myTasksIndex, 1);
    setMyTasks(newMyTasks);

    let newNotAddedTasks = [...notAddedTasks];
    newNotAddedTasks.push(item);
    setNotAddedTasks(newNotAddedTasks);
  };

  const getTasksList = () => {
    let viewToReturn;

    if (index === 0) {
      viewToReturn = <View>
        <Text style={styles.subheading}>Added to My Tasks</Text>
        <FlatList
            data={addedTasks}
            renderItem={(obj) => renderWeeklyTask(obj, "added")}
            keyExtractor={(item, index) => keyExtractor(index)}
        />
        <Text style={styles.subheading}>Not Added to My Tasks</Text>
        <FlatList
            data={notAddedTasks}
            renderItem={(obj) => renderWeeklyTask(obj, "notAdded")}
            keyExtractor={(item, index) => keyExtractor(index)}
        />
      </View>

    } else {
      viewToReturn = <View>
        <Text style={styles.subheading}>Current Tasks</Text>
        <FlatList
            data={myTasks}
            renderItem={renderMyTask}
            keyExtractor={(item, index) => keyExtractor(index)}
        />
      </View>
    }

    return viewToReturn;
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.segmentedControlContainer}>
        <TasksSegmentedControl
          index={index}
          setIndex={setIndex}/>
      </View>
      <View style={styles.listContainer}>
        {getTasksList()}
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
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    marginTop: 15,
  }
});
