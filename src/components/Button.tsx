import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ColorCodes} from '../ColorCodes';
import {Typography} from '.';
import {ButtonProps} from './ComponentModel';

const Button: FC<ButtonProps> = ({onPress, text, extraStyles}) => {
  return (
    <TouchableOpacity style={[styles.container, extraStyles]} onPress={onPress}>
      <Typography
        fontFamily="Inter"
        fontSize={16}
        fontColor={ColorCodes.white}
        fontWeight={700}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: ColorCodes.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
});

export {Button};
