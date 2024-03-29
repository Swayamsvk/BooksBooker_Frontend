import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ColorCodes} from '../ColorCodes';
import {InputFieldProps} from './ComponentModel';

const InputField: FC<InputFieldProps> = ({
  placeholder,
  onChangeText,
  value,
  extraStyles,
  multiline,
  numberOfLines,
}) => {
  return (
    <View style={[styles.container, extraStyles]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: ColorCodes.primary,
    backgroundColor: ColorCodes.white,
  },
});

export {InputField};
