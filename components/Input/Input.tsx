import React, {useCallback} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

interface InputProps {
  value?: string;
  textChangeHandler: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({value, textChangeHandler}: InputProps) => {
  const textHandler = useCallback(
    (text: string) => {
      textChangeHandler(text);
    },
    [textChangeHandler],
  );

  return (
    <View>
      <Text style={styles.text}>Add new Todo</Text>
      <TextInput value={value} onChangeText={textHandler} multiline style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  input: {
    marginTop: 10,
    fontSize: 30,
    borderColor: '#000',
    borderWidth: 1,
  },
});
