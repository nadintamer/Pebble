import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Colors from '../themes/Colors';
import CardComponent from '../components/CardComponent';
import { AsyncStorage } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SavedCardsScreen({ navigation }) {
  const [bookmarks, setBookmarks] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const reloadBookmarks = async () => {
      setIsRefreshing(true);
      const bookmarks = await getBookmarks();
      setBookmarks(bookmarks);
      setIsRefreshing(false);
    }
    reloadBookmarks()
  }, [])

  const getBookmarks = async () => {
    try {
      const bookmark = await AsyncStorage.getItem('allBookmarkedItems');
      return (bookmark ? JSON.parse(bookmark) : []);
    } catch (error) {
      console.log(error);
    }
    return ([]);
  }

  const bookmarkPressed = (item) => {
    const { navigate } = navigation;
    navigate('BookmarkViewer', { content: item });
  }

  const reloadBookmarks = async () => {
    setIsRefreshing(true);
    const bookmarks = await getBookmarks();
    setBookmarks(bookmarks);
    setIsRefreshing(false);
  }

  const _keyExtractor = (item, index) => index.toString();

  const renderItem = ({item}) => {
    return (
      <CardComponent
        article={item}
        navigation={navigation}
      />
    );
  }

  let emptyList = null;
  if (!bookmarks[0]) {
    emptyList = (<Text style={styles.warning}>You haven't saved any modules yet!</Text>);
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={{width: '90%', height: '100%' }}>
        {emptyList}
        <FlatList
          style={{marginTop:  32}}
          data={bookmarks}
          keyExtractor={_keyExtractor}
          renderItem={renderItem}
          onRefresh={reloadBookmarks}
          refreshing={isRefreshing}
        />
      </View>
    </SafeAreaView>
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
  actionCard: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.lightPurple,
    height: windowHeight * 0.15,
    width: '100%',
    borderRadius: 20,
    marginBottom: 32,
    zIndex: 1
  },
  actionBubble: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    height: windowHeight * 0.104,
    opacity: 0.2,
    width: '25%',
    borderRadius: 20,
    marginTop: 20,
    zIndex: 2
  },
  imageBackground: {
    height: 84,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3,
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: Colors.lightPurple,
    borderRadius: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    backgroundColor: 'red',
  },
  scrollView: {
    width: '90%',
    backgroundColor: Colors.white,
  },
  cardText: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    opacity: 0.8
  },
  subheading: {
    fontFamily: "NunitoSans_700Bold",
    fontSize: 18,
  },
  bodyText: {
    fontSize: 11,
    fontFamily: 'NunitoSans_400Regular',
  },
  warning: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center',
  }
});
