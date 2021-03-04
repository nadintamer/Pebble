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
    <Text>
        explore haha
    </Text>

    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <View style={styles.actionCard}>
                    <Text style={styles.cardText}>{"\n"}
                        <Text style={styles.subheading}>  What You Should Know: Paternity Leave {"\n"}</Text>
                        <Text>  Your employer's policies, alternatives, and more</Text>
                    </Text>
                </View>
    </TouchableOpacity>

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
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
    },
    actionCard: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: Colors.lightPurple,
        height: windowHeight * 0.17,
        width: windowWidth * 0.9,
        borderRadius: 20,
        marginTop: 30
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
        fontFamily: "NunitoSans_700Bold",
        fontSize: 20,
        marginTop: 15,
      },
});



