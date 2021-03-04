import React, { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { SearchBar } from 'react-native-elements';

import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FAQScreen() {
  const [search, updateSearch] = useState('');
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.searchContainer}>
        <Feather.Button name="search" size={24} color={Colors.darkPurple} backgroundColor='transparent'
          onPress={() => { console.log("search") }} />
        <TextInput
          style={styles.textinput}
          placeholder={'Search by topic (eg: "additional resources)'}
          clearButtonMode={'always'}
          onChangeText={(text) => setText(text)}
          value={text}
          keyboardShouldPersistTaps='never'
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
    width: '90%',
    flex: 0.8,
    alignItems: 'center',
    color: Colors.white,
    alignItems: 'stretch',
  },
  textinput: {
    flex: 5,
    borderColor: 'gray',
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
  searchcontainer: {
    backgroundColor: 'white',
    borderWidth: 0, //no effect
    shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },

  searchbar: {
    width: "100%",
    borderWidth: 0, //no effect
  },
});

/*<SearchBar
          placeholderTextColor='#fff'
          placeholder='Search by topic (eg: "additional resources")'
          onChangeText={updateSearch}
          value={search}
        />*/

/* <SearchBar
  placeholder='Search by topic (eg: "additional resources")'
  onChangeText={updateSearch}
  value={search}
  style={styles.searchbar}
  lightTheme round
  containerStyle={{
    backgroundColor:'white',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
}}
/>*/