import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import {useController} from 'react-hook-form';

function Input({name, control, placeholder, testID}) {
  const {field} = useController({
    name,
    control,
    defaultValue: '',
    rules: {
      required: true,
    },
  });

  return (
    <TextInput
      testID={testID}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
});

export default Input;
