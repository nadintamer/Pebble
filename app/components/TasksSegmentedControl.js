import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Button, FlatList } from 'react-native';
import Colors from '../themes/Colors';

import SegmentedControlTab from "react-native-segmented-control-tab";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TasksSegmentedControl(props) {
  const [weeklyTasks, setWeeklyTasks] = useState(["Task 1", "Task 2"]);
  const [myTasks, setMyTasks] = useState(["Task 3", "Task 4"]);

  return (
    <SegmentedControlTab
      values={['Week 30 Tasks', 'My Tasks']}
      selectedIndex={props.index}
      onTabPress={(index) => {
        props.setIndex(index);
      }}
      borderRadius={20}
      tabsContainerStyle={styles.tabsContainerStyle}
      tabStyle={styles.tabStyle}
      tabTextStyle={styles.tabTextStyle}
      activeTabStyle={styles.activeTabStyle}
      activeTabTextStyle={styles.activeTabTextStyle}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}


const styles = StyleSheet.create({
  tabsContainerStyle: {
     width: '100%',
     height: '100%',
     borderRadius: 20,
     backgroundColor: Colors.lightGrey,
  },
  tabStyle: {
     backgroundColor: Colors.lightGrey,
     borderRadius: 20,
     borderColor: 'transparent',
     fontSize: 18,
  },
  tabTextStyle: {
     color: '#818181',
     fontFamily: 'NunitoSans_400Regular',
     fontSize: 16,
  },
  activeTabStyle: {
     backgroundColor: 'white',
     borderColor: Colors.lightGrey,
     borderWidth: 3,
     borderRadius: 20,
  },
  activeTabTextStyle: {
     color: '#949BA6',
     fontFamily: 'NunitoSans_400Regular',
     fontSize: 16,
  },
});
