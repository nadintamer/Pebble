import React, { useState, useRef, useEffect, componentDidMount } from 'react';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import Colors from '../themes/Colors';
import Articles from '../themes/Articles';
import CardComponent from '../components/CardComponent';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from 'react-native';

export default function SearchScreen({ route, navigation }) {
  const { searchTerm } = route.params;
  const articles = [
    Articles.communication,
    Articles.paternityLeave,
    Articles.lifeInsurance,
    Articles.emotionalWellness,
    Articles.week30Symptoms,
    Articles.morningSickness,
  ];
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState('');

  const resetSearchResults = () => {
    setSearchResults(articles);
  };

  useEffect(() => {
    resetSearchResults();
    setText(searchTerm);
    searchArticles(searchTerm);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <CardComponent
        article={item}
        navigation={navigation}
      />
    );
  };

  const searchArticles = (item) => {
    const filteredArticles = articles.filter(article => {
      let articleLowercase = (
        article.title +
        ' ' +
        article.subtitle +
        ' ' +
        article.body
      ).toLowerCase();
      let searchTermLowercase = item.toLowerCase();

      return articleLowercase.indexOf(searchTermLowercase) > -1;
    });
    setSearchResults(filteredArticles);
  };

  const noModulesFound = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}
      >
        <Text style={styles.warning}>No modules found 😢</Text>
      </View>
    );
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.searchContainer}>
        <Feather.Button name="search" size={24} color={Colors.darkPurple} backgroundColor='transparent'
          onPress={() => navigation.navigate('Search', { searchTerm: text })} />
        <TextInput
          style={styles.textinput}
          placeholder={'Search...'}
          clearButtonMode={'always'}
          onChangeText={(text) => {
            setText(text);
            searchArticles(text);
          }}
          value={text}
          onSubmitEditing={(event) => {
            searchArticles(text);
          }}
        />
      </View>
      <View style={{ width: '90%', flex: 1 }}>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={noModulesFound()}
        />
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
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F7',
    borderRadius: 20,
    marginBottom: 32
  },
  textinput: {
    flex: 5,
    borderColor: 'gray',
    fontFamily: 'Nunito_400Regular',
  },
  warning: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
});
