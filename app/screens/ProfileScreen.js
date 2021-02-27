import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Button } from 'react-native';
import Colors from '../themes/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ProfileScreen() {
  return (
    <View style={styles.homeContainer}>
      <Button
          title="Emergency"
          onPress={() => Alert.alert('Emergency Button pressed')}
      />
      <Button
          title="Settings"
          onPress={() => Alert.alert('Settings Button pressed')}
      />
      <Button
          title="Saved"
          onPress={() => Alert.alert('Saved Button pressed')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePictureContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
