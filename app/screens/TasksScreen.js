import React, { useState, useRef, useEffect } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, Image, Button, FlatList, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native';
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from '../themes/Colors';
import { AsyncStorage } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import TasksSegmentedControl from "../components/TasksSegmentedControl";
import WeeklyTask from "../components/WeeklyTask"
import MyTask from "../components/MyTask"
import CompletedTask from "../components/CompletedTask"
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
  const [notAddedTasks, setNotAddedTasks] = useState(["Schedule tour of birth hospital 🏥", "Do a practice drive to the hospital and plan alternate routes 🚗", "Make a list of items for baby’s nursery", "Ask employer about paternity leave"]);
  const [myTasks, setMyTasks] = useState([{text: "Schedule Week 29 Ultrasound", editing: false}, {text: "Get your partner flowers 🌼", editing: false}]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showingCompleted, setShowingCompleted] = useState(false);
  const listRef = useRef(null);
  const taskRef = useRef(null);

  useEffect(() => {
    readTasks();
  }, []);

  useEffect(() => {
    setIndex(startingTab);
    navigation.setParams({startingTab: 1})
  }, [isFocused]);

  /*
  ASYNCSTORAGE FUNCTIONS
  */
  const setTasksFromStorage = (newValue, taskType) => {
    switch (taskType) {
      case 'myTasks':
        setMyTasks(JSON.parse(newValue));
        break;
      case 'completedTasks':
        setCompletedTasks(JSON.parse(newValue));
        break;
      case 'addedTasks':
        setAddedTasks(JSON.parse(newValue));
        break;
      case 'notAddedTasks':
        setNotAddedTasks(JSON.parse(newValue));
        break;
    }
  }

  const readTasks = async () => {
    try {
      const myTasks = await AsyncStorage.getItem('myTasks');
      if (myTasks !== null) {
        setTasksFromStorage(myTasks, 'myTasks');
      }
      const completedTasks = await AsyncStorage.getItem('completedTasks');
      if (completedTasks !== null) {
        setTasksFromStorage(completedTasks, 'completedTasks');
      }
      const addedTasks = await AsyncStorage.getItem('addedTasks');
      if (addedTasks !== null) {
        setTasksFromStorage(addedTasks, 'addedTasks');
      }
      const notAddedTasks = await AsyncStorage.getItem('notAddedTasks');
      if (notAddedTasks !== null) {
        setTasksFromStorage(notAddedTasks, 'notAddedTasks');
      }
    } catch (e) {
      console.error(e);
    }
  }

  const setStorage = async (newValue, taskType) => {
    try {
      await AsyncStorage.setItem(taskType, JSON.stringify(newValue));
    } catch (e) {
      console.error(e);
    }
  }

  /*
  TASK FUNCTIONS
  */
  const addNewTask = (text) => {
    let myTasksText = myTasks.map(task => task.text);
    if (text !== "" && !myTasksText.includes(text)) {
      let newMyTasks = [...myTasks];
      newMyTasks.unshift({text: text, editing: false});
      setMyTasks(newMyTasks);
      setStorage(newMyTasks, 'myTasks');

      if (myTasks.length > 0) {
        listRef.current.scrollToIndex({animated: true, index: 0});
      }
    }
  };

  const addToMyTasks = (index, item) => {
    let newNotAddedTasks = [...notAddedTasks];
    newNotAddedTasks.splice(index, 1);
    setNotAddedTasks(newNotAddedTasks);
    setStorage(newNotAddedTasks, 'notAddedTasks');

    let newAddedTasks = [...addedTasks];
    newAddedTasks.unshift(item);
    setAddedTasks(newAddedTasks);
    setStorage(newAddedTasks, 'addedTasks');

    let newMyTasks = [...myTasks];
    newMyTasks.unshift({text: item, editing: false});
    setMyTasks(newMyTasks);
    setStorage(newMyTasks, 'myTasks');
  };

  const removeFromMyTasks = (index, item) => {
    let newAddedTasks = [...addedTasks];
    newAddedTasks.splice(index, 1);
    setAddedTasks(newAddedTasks);
    setStorage(newAddedTasks, 'addedTasks');

    let newMyTasks = [...myTasks];
    let myTasksIndex = myTasks.map(function(task) { return task.text; }).indexOf(item);
    newMyTasks.splice(myTasksIndex, 1);
    setMyTasks(newMyTasks);
    setStorage(newMyTasks, 'myTasks');

    let newNotAddedTasks = [...notAddedTasks];
    newNotAddedTasks.unshift(item);
    setNotAddedTasks(newNotAddedTasks);
    setStorage(newNotAddedTasks, 'notAddedTasks');
  };

  const setEditing = (index, val) => {
    let newMyTasks = [...myTasks];
    newMyTasks[index].editing = val;
    setMyTasks(newMyTasks);
  };

  // New editing ToDo list function
  const editTask = (index, newItem) => {
    setEditing(index, false);
    let newMyTasks = [...myTasks];
    let oldTask = newMyTasks[index].text;
    if (addedTasks.includes(oldTask)) {
      let addedIndex = addedTasks.indexOf(oldTask);
      let newAddedTasks = [...addedTasks];
      newAddedTasks[addedIndex] = newItem;
      setAddedTasks(newAddedTasks);
      setStorage(newAddedTasks, 'addedTasks');
    }
    newMyTasks[index].text = newItem; // update individual item in the list
    setMyTasks(newMyTasks);
    setStorage(newMyTasks, 'myTasks');
  };

  const completeTask = (item) => {
    let index = myTasks.indexOf(item);
    let newTask = myTasks[index];

    let newMyTasks = [...myTasks];
    newMyTasks.splice(index, 1);
    setMyTasks(newMyTasks);
    setStorage(newMyTasks, 'myTasks');

    let newCompletedTasks = [...completedTasks];
    newCompletedTasks.unshift(newTask.text);
    setCompletedTasks(newCompletedTasks);
    setStorage(newCompletedTasks, 'completedTasks');
  };

  const uncompleteTask = (item) => {
    let index = completedTasks.indexOf(item);
    let newTask = completedTasks[index];

    let newCompletedTasks = [...completedTasks];
    newCompletedTasks.splice(index, 1);
    setCompletedTasks(newCompletedTasks);
    setStorage(newCompletedTasks, 'completedTasks');

    let newMyTasks = [...myTasks];
    newMyTasks.unshift({text: newTask, editing: false});
    setMyTasks(newMyTasks);
    setStorage(newMyTasks, 'myTasks');

    if (newCompletedTasks.length == 0) {
      setShowingCompleted(false);
    }
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
    setStorage(newTasks, 'myTasks');

    if (addedTasks.includes(item)) {
      let newAddedTasks = [...addedTasks];
      let addedTasksIndex = newAddedTasks.indexOf(item);
      newAddedTasks.splice(addedTasksIndex, 1);
      setAddedTasks(newAddedTasks);
      setStorage(newAddedTasks, 'addedTasks');

      let newNotAddedTasks = [...notAddedTasks];
      newNotAddedTasks.unshift(item);
      setNotAddedTasks(newNotAddedTasks);
      setStorage(newNotAddedTasks, 'notAddedTasks');
    }
  };

  /*
  FLATLIST RENDERING FUNCTIONS
  */
  const toggleShowingCompleted = () => {
    if (showingCompleted) {
      setShowingCompleted(false);
    } else {
      setShowingCompleted(true);
    }
  }

  const keyExtractor = (index) => {
    return index.toString();
  };

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

  const renderCompletedTask = ({ item, index }) => {
    return <CompletedTask
              task={item}
              index={index}
              uncompleteTask={uncompleteTask}
            />;
  };

  const renderMyTask = ({ index, item }) => {
    return <MyTask
              task={item}
              completeTask={completeTask}
              index={index}
              editToDo={editTask}
              setEditing={setEditing}
              userInput={userInput}
              setUserInput={setUserInput}
            />;
  };

  const renderHiddenItem = ({ index }, rowMap) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            closeRow(rowMap, index);
            setUserInput(myTasks[index].text);
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

  /*
  CONDITIONAL RENDERING FUNCTIONS
  */
  const getCompletedTasks = () => {
    let viewToReturn = null;

    if (showingCompleted) {
      if (completedTasks.length == 0) {
        viewToReturn = <Text style={styles.warning}>You haven't completed any tasks yet!</Text>
      } else {
        viewToReturn = <FlatList
            data={completedTasks}
            renderItem={renderCompletedTask}
            keyExtractor={(item, index) => keyExtractor(index)}
            style={{marginBottom: 44 }}
        />
      }
    }

    return viewToReturn;
  }

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
      viewToReturn = <View style={{flex: 1 }}>
        <Text style={styles.subheading}>Current Tasks</Text>
        <AddNewTask addNewTask={addNewTask}/>
        <View style={{ maxHeight: '57%', flexGrow: 0 }}>
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
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center'}}
            onPress={toggleShowingCompleted}>
            <Image
              source={showingCompleted ? require("../../assets/images/completed-open.png") : require("../../assets/images/completed-closed.png")}
              style={styles.completedToggle}
            />
            <Text style={styles.subheadingCompleted}>Completed Tasks</Text>
          </TouchableOpacity>
          <View style={{ flexGrow: 0 }}>
            {getCompletedTasks()}
          </View>
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
    marginTop: 20,
  },
  subheadingCompleted: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 24,
    marginTop: 44,
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
  completedToggle: {
    width: 20,
    height: 20,
    marginTop: 44,
    marginRight: 10,
  },
  warning: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
  }
});
