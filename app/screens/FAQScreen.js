import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FAQScreen() {
  const [search, updateSearch] = useState('');
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.searchContainer}>
        <Feather.Button
          name="search"
          size={24}
          color={Colors.darkPurple}
          backgroundColor='transparent'
          onPress={() => { console.log("search") }} />
        <TextInput
            style={styles.textinput}
            placeholder={'Search by topic...'}
            clearButtonMode={'always'}
            onChangeText={(text) => setText(text)}
            value={text}
            keyboardShouldPersistTaps='never'
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.actionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.boldedText}>How do I use the tasks feature? {"\n"}</Text>
            <Text style={styles.cardText}>Adding a suggested task from Week X on the tasks tab will add it to your running “My Tasks” list. To access tasks from previous weeks, navigate to previous weeks from the home screen and access tasks from there.</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.boldedText}>Where can I find additional resources? {"\n"}</Text>
            <Text style={styles.cardText}>Check out these websites for more information about pregnancy and becoming a parent.</Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.boldedText}>What does the progress bar mean? {"\n"}</Text>
            <Text style={styles.cardText}>This progress bar represents how far along your partner is in their pregnancy. Remember that your due date is only an estimation! </Text>
          </View>
        </View>

        <View style={styles.actionCard}>
          <View style={styles.textContainer}>
            <Text style={styles.boldedText}>How does Pebble recommend items? {"\n"}</Text>
            <Text style={styles.cardText}>Pebble leverages intelligent AI algorithms that can analyze articles and tasks you spend the most time on and provides suggestions accordingly. </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    height: windowHeight,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
  },
  searchBar: {
    width: '100%',
    alignItems: 'center',
    color: Colors.white,
    alignItems: 'flex-start',
  },
  textinput: {
    flex: 5,
    borderColor: 'gray',
  },
  actionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.17,
    width: '100%',
    borderRadius: 20,
    flex: 3,
    marginTop: 10
  },
  textContainer: {
    width: '90%',
  },
  boldedText: {
    fontFamily: 'NunitoSans_700Bold',
  },
  cardText: {
    fontFamily: 'NunitoSans_400Regular',
  },
  searchcontainer: { // this isn't used anywhere
    backgroundColor: 'white',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    alignItems: 'stretch'
  },
  searchbar: {
    width: '100%',
  },
  scrollView: {
    width: '90%',
    backgroundColor: Colors.white,
  },
});
