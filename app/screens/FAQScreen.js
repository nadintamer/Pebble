import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FAQScreen() {
  const [search, updateSearch] = useState('');

    return (
      <SafeAreaView style={styles.homeContainer}>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder='Search by topic (eg: "additional resources")'
            onChangeText={updateSearch}
            value={search}
          />
        </View>

            <View style={styles.actionCard}>
            <Text style={styles.cardText}>{"\n"}
            <Text style={styles.boldedText}>  How do I use the tasks feature? {"\n"}{"\n"}</Text>
            <Text>  Adding a suggested task from Week X {"\n"}  on the tasks tab will add the task to {"\n"}  your running “My Tasks” list. To access  {"\n"}  tasks from previous weeks, navigate to {"\n"}  previous weeks from the home screen {"\n"}  and access tasks from there.</Text>
            </Text>
            </View>

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
searchBar: {
  width: '90%',
  flex: 0.8,
  alignItems: 'center',
  color: Colors.white,
alignItems: 'stretch',
},
  actionCard: {
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.3,
    width: windowWidth * 0.8,
    borderRadius: 20,
  },
  boldedText: {
    fontWeight: "bold"
  },
});
