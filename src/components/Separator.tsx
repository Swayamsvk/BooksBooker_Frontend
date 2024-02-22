import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ColorCodes} from '../ColorCodes';

const Separator = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    height: 2,
    marginBottom: 12,
    backgroundColor: ColorCodes.grey,
  },
});

export {Separator};
