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
        <View>
          <SearchBar
            placeholder='Search by topic (eg: "additional resources")'
            onChangeText={updateSearch}
            value={search}
          />
        </View>

        <View style={styles.questionContainer}>
            <View style={styles.actionCard}>
              <Text style={styles.boldedText}>How do I use the tasks feature?</Text>
              <Text>Adding a suggested task from Week X on the tasks tab will add the task to your running “My Tasks” list. To access tasks from previous weeks, navigate to previous weeks from the home screen and access tasks from there.</Text>
            </View>

            <View style={styles.answerContainer}>

            </View>
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
  questionContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-between',
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
