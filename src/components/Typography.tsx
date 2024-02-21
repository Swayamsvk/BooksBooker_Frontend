import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TypographyProps} from './ComponentModel';

const Typography: FC<TypographyProps> = ({
  children,
  fontFamily,
  fontSize,
  fontColor,
  fontWeight,
  extraStyle,
  onPress,
}) => {
  return (
    <Text
      onPress={onPress}
      style={[
        {fontFamily, fontSize, color: fontColor, fontWeight},
        extraStyle,
      ]}>
      {children}
    </Text>
  );
};

export {Typography};
