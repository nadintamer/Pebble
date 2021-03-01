import React, { useState, useRef } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from '../themes/Colors';

import TasksSegmentedControl from "../components/TasksSegmentedControl";
import WeeklyTask from "../components/WeeklyTask"
import MyTask from "../components/MyTask"
import AddNewTask from "../components/AddNewTask"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TasksScreen() {
  const [index, setIndex] = useState(1);
  const [addedTasks, setAddedTasks] = useState([]);
  const [notAddedTasks, setNotAddedTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);
  const [myTasks, setMyTasks] = useState(["Task 5", "Task 6"]);
  const listRef = useRef(null);

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

  const renderHiddenItem = ({ index }, rowMap) => {
    return (
      <View style={styles.rowBack}>
          <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
            <TouchableOpacity onPress={() => deleteTask(rowMap, index)}>
              <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  const keyExtractor = (index) => {
    return index.toString();
  };

  const addNewTask = (text) => {
    if (text !== "" && !myTasks.includes(text)) {
      let newMyTasks = [...myTasks];
      newMyTasks.unshift(text);
      setMyTasks(newMyTasks);

      if (myTasks.length > 0) {
        listRef.current.scrollToIndex({animated: true, index: 0});
      }
    }
  };

  const addToMyTasks = (index, item) => {
    let newNotAddedTasks = [...notAddedTasks];
    newNotAddedTasks.splice(index, 1);
    setNotAddedTasks(newNotAddedTasks);

    let newAddedTasks = [...addedTasks];
    newAddedTasks.unshift(item);
    setAddedTasks(newAddedTasks);

    let newMyTasks = [...myTasks];
    newMyTasks.unshift(item);
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
    newNotAddedTasks.unshift(item);
    setNotAddedTasks(newNotAddedTasks);
  };

  // Close a row before deleting
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  // Delete a row by swiping left
  const deleteTask = (rowMap, index) => {
    let item = myTasks[index];

    closeRow(rowMap, index);
    let newTasks = [...myTasks];
    newTasks.splice(index, 1);
    setMyTasks(newTasks);

    if (addedTasks.includes(item)) {
      let newAddedTasks = [...addedTasks];
      let addedTasksIndex = newAddedTasks.indexOf(item);
      newAddedTasks.splice(addedTasksIndex, 1);
      setAddedTasks(newAddedTasks);

      let newNotAddedTasks = [...notAddedTasks];
      newNotAddedTasks.unshift(item);
      setNotAddedTasks(newNotAddedTasks);
    }
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
            style={{ marginBottom: 44 }}
        />
        <Text style={styles.subheading}>Not Added to My Tasks</Text>
        <FlatList
            data={notAddedTasks}
            renderItem={(obj) => renderWeeklyTask(obj, "notAdded")}
            keyExtractor={(item, index) => keyExtractor(index)}
        />
      </View>

    } else {
      viewToReturn = <View style={{flex: 1}}>
        <Text style={styles.subheading}>Current Tasks</Text>
        <AddNewTask addNewTask={addNewTask}/>
        <View style={{ flex: 1 }}>
          <SwipeListView
            disableRightSwipe
            recalculateHiddenLayout
            data={myTasks}
            renderItem={renderMyTask}
            renderHiddenItem={renderHiddenItem}
            keyExtractor={(item, index) => keyExtractor(index, item)}
            listViewRef={listRef}
            rightOpenValue={-150}
          />
        </View>
      </View>
    }

    return viewToReturn;
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.segmentedControlContainer}>
        <TasksSegmentedControl
          index={index}
          setIndex={setIndex}/>
      </View>
      <View style={styles.listContainer}>
        {getTasksList()}
      </View>
    </SafeAreaView>
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
    height: 52,
    margin: 5,
  },
  listContainer: {
    flex: 1,
    width: '90%',
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    marginTop: 15,
  },
  backTextWhite: {
    color: 'white',
    fontSize: 18,
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginVertical: 5,
  },
  backRightBtn: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: 150,
  },
  backRightBtnRight: {
    right: 0,
    backgroundColor: 'red',
  },
});
