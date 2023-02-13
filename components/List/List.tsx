import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {Header} from '../Header/Header';
import {ListItem} from '../ListItem/ListItem';
import {ModalTodo} from '../Modal/Modal';

export const List = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {todos} = useAppSelector(state => state.todoReducer);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Header openModalHanlder={setIsOpen} />
        {todos.length ? (
          todos.map((item, index) => (
            <ListItem key={item.id} order={index + 1} item={item} />
          ))
        ) : (
          <Text>Empty list</Text>
        )}
      </View>

      <ModalTodo isOpen={isOpen} closeHandler={setIsOpen} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'aqua',
  },
  container: {
    padding: 10,
  },
});
