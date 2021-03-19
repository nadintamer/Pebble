import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function DotComponent() {
    <View style={styles.dot}/>
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'rgba(50, 49, 117, 1.0)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },
});
