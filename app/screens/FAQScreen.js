import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, StyleSheet, ScrollView, Dimensions, Linking, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FAQCardComponent from '../components/FAQCardComponent';
import FAQ from '../themes/FAQ';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FAQScreen() {
  const questions = [
    FAQ.tasks,
    FAQ.resources,
    FAQ.progressBar,
    FAQ.recommendations,
  ];
  const [searchResults, setSearchResults] = useState([]);
  const [text, setText] = useState('');

  const resetSearchResults = () => {
    setSearchResults(questions);
  };

  useEffect(() => {
    resetSearchResults();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <FAQCardComponent faq={item}/>
    );
  };

  const searchQuestions = (item) => {
    const filteredQuestions = questions.filter(question => {
      let questionLowercase = (
        question.question +
        ' ' +
        question.answer
      ).toLowerCase();
      let searchTermLowercase = item.toLowerCase();

      return questionLowercase.indexOf(searchTermLowercase) > -1;
    });
    setSearchResults(filteredQuestions);
  };

  const noQuestionsFound = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}
      >
        <Text style={styles.warning}>No questions found 😢</Text>
      </View>
    );
  }

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
          style={styles.textInput}
          placeholder={'Search by topic...'}
          clearButtonMode={'always'}
          value={text}
          keyboardShouldPersistTaps='never'
          onChangeText={(text) => {
            setText(text);
            searchQuestions(text);
          }}
          value={text}
          onSubmitEditing={(event) => {
            searchQuestions(text);
          }}
        />
      </View>

      <View style={{ width: '90%' }}>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={noQuestionsFound()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    height: windowHeight,
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
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
  },
  searchBar: {
    width: '100%',
    alignItems: 'center',
    color: Colors.white,
    alignItems: 'flex-start',
  },
  textInput: {
    flex: 5,
    fontFamily: 'Nunito_400Regular',
    borderColor: 'gray',
  },
  actionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: Colors.lightGrey,
    height: windowHeight * 0.17,
    width: '100%',
    borderRadius: 20,
    flex: 3,
    marginTop: 10,
  },
  textContainer: {
    width: '90%',
    opacity: 0.8
  },
  boldedText: {
    fontFamily: 'NunitoSans_700Bold',
  },
  cardText: {
    fontFamily: 'NunitoSans_400Regular',
  },
  cardLink: {
    fontFamily: 'NunitoSans_400Regular',
    color: Colors.darkPurple,
    textDecorationLine: 'underline',
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
  warning: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
});

/*

      <ScrollView style={styles.scrollView}>
        <FAQCardComponent faq={FAQ.tasks}/>
        <FAQCardComponent faq={FAQ.resources}/>
        <FAQCardComponent faq={FAQ.progressBar}/>
        <FAQCardComponent faq={FAQ.recommendations}/>
      </ScrollView>*/
