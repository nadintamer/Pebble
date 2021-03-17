import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Colors from '../themes/Colors';
import { SearchBar } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import Articles from '../themes/Articles';
import { useIsFocused } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ExploreScreen({ navigation }) {
  const [search, updateSearch] = useState('');
  const [text, setText] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    setText("");
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.searchContainer}>
        <Feather.Button name="search" size={24} color={Colors.darkPurple} backgroundColor='transparent'
          onPress={() => navigation.navigate('Search', { searchTerm: text })} />
        <TextInput
          style={styles.textinput}
          placeholder={'Search by topic...'}
          clearButtonMode={'always'}
          onChangeText={(text) => setText(text)}
          value={text}
          keyboardShouldPersistTaps='never'
          onSubmitEditing={() => navigation.navigate('Search', { searchTerm: text })}
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.subheading}>
            You might be interested in...
        </Text>
      </View>

      <View style={styles.exploreCardColContainer}>
        <View style={styles.exploreCardRowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Article', {
              articleInfo: Articles.morningSickness
            })}>
              <View style={styles.exploreCardLeft}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/morningsickness-explore.png")}
                    style={{ width: 105, height: 105}}
                  />
                </View>
              </View>
              <Text style={styles.cardHeadingLeft}> Morning Sickness </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Article', {
              articleInfo: Articles.lifeInsurance
            })}>
              <View style={styles.exploreCardRight}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/life.png")}
                    style={{ width: 105, height: 105, overflow: 'visible'}}
                  />
                </View>
              </View>
              <Text style={styles.cardHeadingRight}> Life Insurance </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.exploreCardRowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Article', {
              articleInfo: Articles.paternityLeave
            })}>
              <View style={styles.exploreCardLeft}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/paternity-explore.png")}
                    style={{ width: 105, height: 105, overflow: 'visible'}}
                  />
                </View>
              </View>
              <Text style={styles.cardHeadingLeft}> Paternity Leave </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Article', {
              articleInfo: Articles.emotionalWellness
            })}>
              <View style={styles.exploreCardRight}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/emotional.png")}
                    style={{ width: 105, height: 105}}
                  />
                </View>
              </View>
              <Text style={styles.cardHeadingRight}> Emotional Health </Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    marginTop: 5
  },
  exploreCardRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  exploreCardLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.193,
    width: windowWidth * 0.425,
    borderRadius: 20,
    marginRight: 0.05 * windowWidth,
  },
  exploreCardRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.193,
    width: windowWidth * 0.425,
    borderRadius: 20,
  },
  cardHeadingRight: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  cardHeadingLeft: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    textAlign: 'center',
    width: '90%',
    marginTop: 20,
    marginBottom: 20
  },
  subheading: {
    textAlign: 'left',
    fontFamily: "NunitoSans_700Bold",
    fontSize: 22,
    marginTop: 32,
    marginBottom: 10
  },
  textinput: {
    flex: 5,
    borderColor: 'gray',
    fontFamily: 'Nunito_400Regular',
  },
  textView: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20
  },
});
