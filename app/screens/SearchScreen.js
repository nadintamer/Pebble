import React, { useState, useRef, useEffect, componentDidMount } from 'react';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import Colors from '../themes/Colors';
import Articles from '../themes/Content';

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
  // const [articles, setArticles] = useState([{ firstName: "Jessica", lastName: "Yu", number: "5033172937", email: "jmyu@stanford.edu" },
  // { firstName: "fake", lastName: "Name", number: "1234", email: "hi@edu" }]);
  const [articles, setArticles] = useState([{ title: Articles.communication.title, articleInf: Articles.communication },
  { title: Articles.morningSickness.title, articleInf: Articles.communication},
  { title: Articles.paternityLeave.title, articleInf: Articles.paternityLeave},
  { title: Articles.lifeInsurance.title, articleInf: Articles.lifeInsurance} ]) //, body: Articles.communication.body , body: Articles.communication.body
  const [text, setText] = useState('');

  const resetArticles = () => {
    setArticles([{ title: Articles.communication.title, articleInf: Articles.communication },
    { title: Articles.morningSickness.title, articleInf: Articles.morningSickness }, { title: Articles.paternityLeave.title, articleInf: Articles.paternityLeave},
    { title: Articles.lifeInsurance.title, articleInf: Articles.lifeInsurance}])
  
  };


  useEffect(() => {
    resetArticles();
  }, []);



  const renderItem = ({ item }) => {
  
    return <View style={{ minHeight: 70, padding: 5 }}>
      <TouchableOpacity style={{ minHeight: 70, padding: 5 }}
        onPress={() => navigation.navigate('Article', {
          articleInfo: item.articleInf
        })}>
        <Text style={{ color: Colors.darkPurple, fontWeight: 'bold', fontSize: 26 }}>
          {item.title + ' '}
          {item.body}
        </Text>
      </TouchableOpacity>

    </View>
  };




  const searchArticles = (item) => {
    const filteredArticles = articles.filter(article => {
      let articleLowercase = (
        article.title +
        ' ' +
        article.body
      ).toLowerCase();
      console.log(item);
      let searchTermLowercase = item.toLowerCase();

      return articleLowercase.indexOf(searchTermLowercase) > -1;
    });
    setArticles(filteredArticles);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: Colors.white }} />

      <TextInput style={{ minHeight: 70, padding: 5 }}
        onChangeText={(text) => {
          setText(text);
          console.log(text);
        }}
        value={text}
        placeholder="Search..."
        onSubmitEditing={(event) => {
          searchArticles(text);
          console.log(text);
          setText("");
        }}
      />
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 50
              }}
            >
              <Text style={{ color: Colors.white }}>No Contacts Found</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  search: {
    flexDirection: 'row',
    width: '90%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});

/*import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, SafeAreaView, StyleSheet, Dimensions, Video, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';
import { SearchBar } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SearchScreen() {
    const [search, updateSearch] = useState('');
    const [text, setText] = useState("");

    return (
      <ScrollView>
            <SafeAreaView style={styles.homeContainer}>
                <Text style={styles.content}>The b yourself, and recruit a support network.</Text>
            </SafeAreaView>
        </ScrollView>
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
  image: {
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.25,
    width: windowWidth,
  },
  content: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'NunitoSans_400Regular'
  }
  });*/
