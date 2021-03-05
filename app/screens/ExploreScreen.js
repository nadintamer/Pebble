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
    
    <View style={styles.searchContainer} >
        <Feather.Button name="search" size={24} color={Colors.darkPurple} backgroundColor='transparent'
          onPress={() => navigation.navigate('Search')} />
        <TextInput
          style={styles.textinput}
          placeholder={'Search by topic (eg: "additional resources)'}
          clearButtonMode={'always'}
          onChangeText={(text) => setText(text)}
          value={text}
          keyboardShouldPersistTaps='never'
        />
      </View>

      <View style={styles.textView}>
        <Text style={styles.subheading}>
            You might be interested in...
        </Text>
      </View>
   
      <View style={styles.exploreCardColContainer}>
        <View style={styles.exploreCardRowContainer}>
            <TouchableOpacity >
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

            <TouchableOpacity >
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
            <TouchableOpacity >
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

            <TouchableOpacity >
                        <View style={styles.exploreCardRight}>
                            <View style={styles.imageContainer}>
                                <Image
                                source={require("../../assets/images/emotional.png")}
                                style={{ width: 105, height: 105}}
                                />
                            </View>
                        </View>
                        <Text style={styles.cardHeadingRight}> Emotional Wellness </Text>
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
    /*
    image: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: Colors.lightPurple,
        height: windowHeight * 0.2,
        width: windowWidth,
        marginTop: 30
    },
    */
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
    textView: {
        width: '90%',
        /*flex: 0.2,*/
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
});
