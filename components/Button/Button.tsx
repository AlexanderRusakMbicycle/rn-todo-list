import React, {useMemo} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  title: string;
  type: 'primary' | 'outline' | 'danger';
  pressHandler: () => void;
}

export const Button = ({
  title,
  pressHandler,
  type = 'outline',
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={{...styles.container, ...styles[type]}}>
        <Text style={styles[type]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    minWidth: 80,
    borderColor: '#000',
    borderWidth: 1,
  },
  danger: {
    backgroundColor: 'red',
    fontSize: 20,
    color: '#fff',
  },
  primary: {
    backgroundColor: 'blue',
    fontSize: 20,
    color: '#fff',
  },
  outline: {
    fontSize: 20,
  },
});
