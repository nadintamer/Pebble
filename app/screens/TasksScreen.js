import React, { useState, useRef, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, Image, Button, FlatList, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from '../themes/Colors';
import { useIsFocused } from "@react-navigation/native";

import TasksSegmentedControl from "../components/TasksSegmentedControl";
import WeeklyTask from "../components/WeeklyTask"
import MyTask from "../components/MyTask"
import AddNewTask from "../components/AddNewTask"
import CustomIcon from "../components/CustomIcon"
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TasksScreen({ route, navigation }) {
  const { startingTab } = route.params;
  const isFocused = useIsFocused();
  const [index, setIndex] = useState(1);
  const [addedTasks, setAddedTasks] = useState([]);
  const [notAddedTasks, setNotAddedTasks] = useState(["Task 1", "Task 2", "Task 3", "Task 4"]);
  const [myTasks, setMyTasks] = useState([{text: "Task 5", status: "notCompleted", editing: false}, {text: "Task 6", status: "notCompleted", editing: false}]);
  const listRef = useRef(null);
  const taskRef = useRef(null);

  useEffect(() => {
    setIndex(startingTab);
    navigation.setParams({startingTab: 1})

  }, [isFocused]);

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
    return <MyTask task={item} completeTask={completeTask} index={index} editToDo={editTask} setEditing={setEditing}/>;
  };

  const renderHiddenItem = ({ index }, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            closeRow(rowMap, index);
            setEditing(index, true);
          }}
        >
          <CustomIcon name="pen" size={20} color={Colors.white} style={{ margin: 5 }}/>
          <Text style={styles.backTextWhite}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => deleteTask(rowMap, index)}
        >
          <Ionicons name="trash-outline" size={20} color={Colors.white} style={{ margin: 5 }}/>
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const keyExtractor = (index) => {
    return index.toString();
  };

  const setEditing = (index, val) => {
    let newMyTasks = [...myTasks];
    newMyTasks[index].editing = val;
    setMyTasks(newMyTasks);
  };

  // New editing ToDo list function
  const editTask = (index, newItem) => {
    let newMyTasks = [...myTasks];
    let oldTask = newMyTasks[index].text;
    if (addedTasks.includes(oldTask)) {
      let addedIndex = addedTasks.indexOf(oldTask);
      let newAddedTasks = [...addedTasks];
      newAddedTasks[addedIndex] = newItem;
      setAddedTasks(newAddedTasks);
    }
    newMyTasks[index].text = newItem; // update individual item in the list
    setMyTasks(newMyTasks);
  };

  const completeTask = (item) => {
    let index = myTasks.indexOf(item);
    let newTask = myTasks[index];
    let done = newTask.status;

    if (done === "completed") {
      newTask.status = "notCompleted";
    } else {
      newTask.status = "completed";
    }

    let newMyTasks = [...myTasks];
    newMyTasks[index] = newTask;
    setMyTasks(newMyTasks);
  };

  const addNewTask = (text) => {
    let myTasksText = myTasks.map(task => task.text);
    if (text !== "" && !myTasksText.includes(text)) {
      let newMyTasks = [...myTasks];
      newMyTasks.unshift({text: text, status: "notCompleted"});
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
    newMyTasks.unshift({text: item, status: "notCompleted"});
    setMyTasks(newMyTasks);
  };

  const removeFromMyTasks = (index, item) => {
    let newAddedTasks = [...addedTasks];
    newAddedTasks.splice(index, 1);
    setAddedTasks(newAddedTasks);

    let newMyTasks = [...myTasks];
    let myTasksIndex = myTasks.map(function(task) { return task.text; }).indexOf(item);
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
    let item = myTasks[index].text;

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
            rightOpenValue={-180}
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
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular'
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: Colors.lightGrey,
  },
  backRightBtn: {
    alignItems: 'center',
    height: '100%',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 85,
  },
  backRightBtnLeft: {
    right: 85,
    backgroundColor: Colors.darkPurple,
  },
  backRightBtnRight: {
    right: 0,
    backgroundColor: 'red',
  },
});
