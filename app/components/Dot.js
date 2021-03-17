import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

/*
const Dot = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? 'rgba(50, 49, 117, 1.0)' : 'rgba(0, 0, 0, 0)';
  } else {
    backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
  }
  return (
    <View
      style={{
        ...styles.dot,
        backgroundColor,
      }}
    />
  );
};

Dot.propTypes = {
  isLight: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
};

const styles = {
  dot: {
    width: 15,
    height: 15,
    borderRadius: 3,
    marginHorizontal: 10,
  },
};
*/

export default function DotComponent() {
    <View style={{backgroundColor:'rgba(50, 49, 117, 1.0)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
};