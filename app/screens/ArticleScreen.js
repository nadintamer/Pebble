import React from 'react';
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, Video, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ArticleScreen({ route, navigation }) {
  const { articleInfo } = route.params;
  const defaultImage = require("../../assets/images/communication2.png");

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.homeContainer}>
        <Image style={styles.image} source={articleInfo.image ? articleInfo.image : defaultImage }></Image>
        <View style={styles.textView}>
          <Text style={styles.heading}>{articleInfo.title}</Text>
          <Text style={styles.subheading}>{articleInfo.subtitle}</Text>
          <Text style={styles.bodyText}>{articleInfo.body}</Text>
        </View>
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
    height: windowHeight * 0.23,
    width: windowWidth * 0.9,
    opacity: 0.75
  },
  bodyText: {
      color: 'black',
      fontSize: 16,
      fontFamily: 'NunitoSans_400Regular',
      color: '#606274',
      marginTop: 20
  },
  boldBodyText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'NunitoSans_700Bold',
    color: '#606274',
    marginTop: 20
},
  heading: {
    color: 'black',
    fontSize: 24,
    fontFamily: "NunitoSans_700Bold",
    marginTop: 20
  },
  subheading: {
    color: 'black',
    fontFamily: "NunitoSans_700Bold",
    fontSize: 16,
    marginTop: 20
  },
  textView: {
    width: windowWidth * 0.9,
    lineHeight: 33
  },
  scrollView: {
    backgroundColor: Colors.white,
  }
});
