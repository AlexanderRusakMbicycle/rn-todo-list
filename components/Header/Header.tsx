import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface HeaderProps {
  openModalHanlder: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({openModalHanlder}: HeaderProps) => {
  const onPressHandler = useCallback(() => {
    openModalHanlder(true);
  }, [openModalHanlder]);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.button}>
          <Text>+</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Add TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 50,
  },
});
