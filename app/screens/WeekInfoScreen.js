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
                    <Text style={styles.cardText}>{"\n"}
                        <Text style={styles.subheading}>  Week 30 Symptoms {"\n"}</Text>
                        <Text>  Fatigue, morning sickness, and more</Text>
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
                <View style={styles.actionCard}>
                    <Text style={styles.cardText}>{"\n"}
                        <Text style={styles.subheading}>  What You Should Know: Paternity Leave {"\n"}</Text>
                        <Text>  Your employer's policies, alternatives, and more</Text>
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Article')}>
                <View style={styles.actionCard}>
                    <Text style={styles.cardText}>{"\n"}
                        <Text style={styles.subheading}>  Communicating With Your Partner {"\n"}</Text>
                    </Text>
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
        width: windowWidth,
        marginTop: 30
    },

    subheading: {
        fontFamily: "NunitoSans_700Bold",
        fontSize: 20,
        marginTop: 15,
      },
});
