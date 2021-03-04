import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Colors from '../themes/Colors';
import { SearchBar } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ExploreScreen({ navigation }) {
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

      <Text style={styles.subheading}>
          You might be interested in...
      </Text>
      <View style={styles.exploreCardColContainer}>
        <View style={styles.exploreCardRowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={styles.exploreCard}>
                        </View>
                        <Text style={styles.cardHeading}> Morning Sickness </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={styles.exploreCard}>
                        </View>
                        <Text style={styles.cardHeading}> Life Insurance </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.exploreCardRowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={styles.exploreCard}>
                        </View>
                        <Text style={styles.cardHeading}> Paternity Leave </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={styles.exploreCard}>
                        </View>
                        <Text style={styles.cardHeading}> Emotional Wellness </Text>
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
      },
    exploreCardColContainer: {
        flex: 1
    },
    exploreCardRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
    },
    exploreCard: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: Colors.lightPurple,
        height: windowHeight * 0.17,
        width: windowWidth * 0.37,
        borderRadius: 20,
        marginTop: 30,
        marginRight: 20
    },
    cardHeading: {
        fontFamily: "Nunito_700Bold",
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: Colors.lightPurple,
        height: windowHeight * 0.2,
        width: windowWidth,
        marginTop: 30
    },
    subheading: {
        textAlign: 'left',
        fontFamily: "NunitoSans_700Bold",
        fontSize: 24,
        marginTop: 15,
    },
    textinput: {
      flex: 5,
      borderColor: 'gray',
      fontFamily: 'Nunito_400Regular',
    },
});
