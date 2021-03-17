import React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../themes/Colors';
import Articles from '../themes/Articles';

import CardComponent from '../components/CardComponent';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WeekInfoScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <Image style={styles.image} source={require("../../assets/images/dad-image.png")}></Image>
            <ScrollView
              style={{ flex: 1, width: '100%' }}
              contentContainerStyle={{alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.actionCard}>
                <CardComponent
                  article={Articles.week30Symptoms}
                  navigation={navigation}
                />
              </View>
              <View style={styles.actionCard}>
                <CardComponent
                  article={Articles.paternityLeave}
                  navigation={navigation}
                />
              </View>
              <View style={styles.actionCard}>
                <CardComponent
                  article={Articles.communication}
                  navigation={navigation}
                />
              </View>
            </ScrollView>
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
        flexDirection: 'row',
        height: windowHeight * 0.15,
        marginTop: 30,
        width: '90%'
    },
    image: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: Colors.lightPurple,
        height: windowHeight * 0.2,
        width: windowWidth * 0.9,
        opacity: 0.7,
        marginTop: 5,
        marginBottom: 22
    },
    subheading: {
        fontFamily: "NunitoSans_700Bold",
        fontSize: 18,
    },
    bodyText: {
        fontSize: 11,
        fontFamily: 'NunitoSans_400Regular',
        marginTop: 10,
    },
    textView: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        opacity: 0.8
    },
});
