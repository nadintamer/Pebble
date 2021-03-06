import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Video, Image } from 'react-native';
import Colors from '../themes/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ArticleScreen({ route, navigation }) {
  const { articleInfo } = route.params;
  const defaultImage = require("../../assets/images/communication2.png");
  const [bookmarked, setBookmarked] = useState(false);
  const [savingBookmark, setSavingBookmark] = useState(false);

  const bookmarkPressed = () => {
    if (!bookmarked) {
      saveBookmark(articleInfo);
    } else {
      deleteBookmark(articleInfo);
    }

    setBookmarked(!bookmarked);
  }

  const saveBookmark = async (newItem) => {
    setSavingBookmark(true);

    const bookmarks = await _getBookmarks();
    await _storeBookmark(bookmarks, newItem);

    setSavingBookmark(false);
  }

  const deleteBookmark = async (item) => {
    setSavingBookmark(true);

    const bookmarks = await _getBookmarks();
    await _removeBookmark(bookmarks, item);

    setSavingBookmark(false);
  }

  const _storeBookmark = async (bookmarks, newBookmarkItem) => {
    try {
      if (_hasItem(bookmarks, newBookmarkItem)) return; //already included, don't add again

      let mutableBookmarks = [...bookmarks, newBookmarkItem];
      await AsyncStorage.setItem('allBookmarkedItems', JSON.stringify(mutableBookmarks));
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  const _removeBookmark = async (bookmarks, newItem) => {
    const mutableBookmarks = bookmarks;
    for (var index = 0; index < mutableBookmarks.length; index++) {
      if (mutableBookmarks[index].title === newItem.title) {
        mutableBookmarks.splice(index, 1);
        break;
      }
    }

    try {
      await AsyncStorage.setItem('allBookmarkedItems', JSON.stringify(mutableBookmarks));
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  const _getBookmarks = async () => {
    try {
      const bookmark = await AsyncStorage.getItem('allBookmarkedItems');
      return (bookmark ? JSON.parse(bookmark) : []);
    } catch (error) {
      console.log(error);
    }
    return ([]);
  }

  const _hasItem = (bookmarks, newItem) => {
    if (!bookmarks) return false;

    for (var index = 0; index < bookmarks.length; index++) {
      if (bookmarks[index].title === newItem.title) {
        return true;
      }
    }

    return false;
  }

  useEffect(() => {
    const isItemBookmarked = async (newItem) => {
        const bookmarks = await _getBookmarks();
        return _hasItem(bookmarks, newItem);
      }

      const checkBookmark = async () => {
        const isBookmarked = await isItemBookmarked(articleInfo);
        if (isBookmarked) setBookmarked(true);
      }
      checkBookmark()
    }, []);

  useEffect(() => {
    (async () => {
      navigation.setOptions({
      headerStyle: {
        backgroundColor: Colors.white,
        shadowColor: 'transparent',
      },
      headerRight: () => (
        bookmarked ?
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={bookmarkPressed}>
          <Ionicons name="ios-bookmark" size={32} color={Colors.coral} />
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={bookmarkPressed}>
          <Ionicons name="ios-bookmark-outline" size={32} color={Colors.coral} />
        </TouchableOpacity>
      ),
    });
  })();
}, [bookmarked]);

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
