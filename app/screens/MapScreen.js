// documentation & examples: https://github.com/bramus/react-native-maps-directions-example/blob/master/App.js


import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = "AIzaSyDOWe6OA113TbhvUJNGKCIs75U6R5sjQXI";

const styles = StyleSheet.create({
  versionBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  versionText: {
    padding: 4,
    backgroundColor: '#FFF',
    color: '#000',
  },
});


class Map extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat = parseFloat(position.coords.latitude)
          var long = parseFloat(position.coords.longitude)

          var initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }

          this.setState({initialPosition: initialRegion})
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
      }


  constructor(props) {
    super(props);

    this.state = {
      coordinates: [
        "Norcliffe Hall, Stanford, CA, USA",
        "Stanford Hospital, Stanford, CA, USA",
      ],
    };


    this.mapView = null;
  }


  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }

  onReady = (result) => {
    this.mapView.fitToCoordinates(result.coordinates, {
      edgePadding: {
        right: (width / 10),
        bottom: (height / 10),
        left: (width / 10),
        top: (height / 10),
      },
    });
  }

  onError = (errorMessage) => {
    console.log(errorMessage); // eslint-disable-line no-console
  }

  setDistance(distance, duration_in_traffic) {
    // console.log('setDistance');
    this.setState({
      distance: parseFloat(distance),
      durationInTraffic: parseInt(duration_in_traffic)
    });
  }

  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c} // eslint-disable-line react/jsx-no-bind
          onPress={this.onMapPress}
        >
          <MapViewDirections
            origin={this.state.initialPosition}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            waypoints={this.state.coordinates.slice(1,-1)}
            mode='DRIVING'
            apikey={GOOGLE_MAPS_APIKEY}
            language='en'
            strokeWidth={4}
            strokeColor="black"
            onStart={(params) => {
              console.log(`Started routing between "${params.origin}" and "${params.destination}"${(params.waypoints.length ? " using waypoints: " + params.waypoints.join(', ') : "")}`);
            }}
            onReady={this.onReady}
            onError={(errorMessage) => {
              console.log(errorMessage);
            }}
            resetOnChange={false}
          />
        </MapView>

      </View>
    );
  }
}

export default Map;

/*
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, TouchableOpacity, Linking, Text } from 'react-native';
import MapView from 'react-native-maps';
import Colors from '../themes/Colors';

export default function MapScreen({ navigation }) {
const lat = 37.4357;
const lng = -122.1763;
  let openMap = () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = 'Your Hospital';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });


    Linking.openURL(url);
    //Linking.openURL(phoneNumber);
  };
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity onPress={openMap} activeOpacity={0.7} style={styles.button} >
        <Text style={styles.TextStyle}>Get Directions!</Text>
      </TouchableOpacity>
    </View>

  );
}


const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {

    width: '80%',
    padding: 6,
    backgroundColor: Colors.darkPurple,
    borderRadius: 7,
  },

  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  }

});*/