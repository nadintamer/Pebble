import React, { useState } from 'react';
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
  });
  