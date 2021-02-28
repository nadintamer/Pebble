import React from 'react';
import { Text, View, StyleSheet, Dimensions, SearchBar } from 'react-native';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FAQScreen() {
    state = {
        search: '',
      };

      updateSearch = (search) => {
        this.setState({ search });
      };

      render() {
        const { search } = this.state;
          
  return (
    <SearchBar
          placeholder="Search by topic (eg: "additional resources")"
          onChangeText={this.updateSearch}
          value={search}
    />
          
    <View style={styles.homeContainer}>
      <View style={styles.questionContainer}>
          <View style={styles.actionCard}>
          <Text style={styles.boldedText}>
            <Text>How do I use the tasks feature?</Text>
          </Text>
          
          <Text>Adding a suggested task from Week X on the tasks tab will add the task to your running “My Tasks” list. To access tasks from previous weeks, navigate to previous weeks from the home screen and access tasks from there.</Text>
          </View>
          
          <View style={styles.answerContainer}>

          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
