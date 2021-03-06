import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'



import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MapScreen() {
    return (
        <MapView
            style={{ flex: 1 }}
            region={{
                latitude: 52.5200066,
                longitude: 13.404954,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
        />

    );
}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
});

