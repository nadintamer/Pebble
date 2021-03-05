import React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WeekInfoScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.homeContainer}>
            <Image style={styles.image} source={require("../../assets/images/dad-image.png")}></Image>

            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
                <View style={styles.actionCard}>
                    <View style={styles.textView}>
                        <Text style={styles.subheading}>Week 30 Symptoms</Text>
                        <Text style={styles.bodyText}>Fatigue, morning sickness, and more</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
                <View style={styles.actionCard}>
                    <View style={styles.textView}>
                        <Text style={styles.subheading}>What You Should Know: Paternity Leave</Text>
                        <Text style={styles.bodyText}>Your employer's policies, alternatives, and more</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
                <View style={styles.actionCard}>
                    <View style={styles.textView}>
                        <Text style={styles.subheading}>Communicating With Your Partner</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        width: windowWidth * 0.9,
        marginTop: 30,
        opacity: 0.7
    },

    subheading: {
        fontFamily: "NunitoSans_700Bold",
        fontSize: 20,
        marginTop: 15,
    },
    bodyText: {
        fontSize: 16,
        fontFamily: 'NunitoSans_400Regular',
        marginTop: 10,
    },
    textView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
    },
});
