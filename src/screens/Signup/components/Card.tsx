import React, {FC} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {ColorCodes} from '../../../ColorCodes';
import {Typography} from '../../../components';
import {CardProps} from '../SignupModel';

const Card: FC<CardProps> = ({children}) => {
  return <View style={[styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: ColorCodes.white,
    padding: 30,
  },
});

export {Card};
