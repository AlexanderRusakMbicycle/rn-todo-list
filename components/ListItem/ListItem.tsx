import React, {memo, useCallback, useState} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ITodo} from '../../models/ITodo';
import {ModalTodo} from '../Modal/Modal';

interface ListItemProps {
  item: ITodo;
  order: number;
}

export const ListItem = memo(({order, item}: ListItemProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const {id, title} = item;

  const modalEditHandler = useCallback(() => {
    setIsEdit(true);
  }, [id, title]);

  return (
    <>
      <TouchableOpacity delayLongPress={1000} onLongPress={modalEditHandler}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {order}. {title}
          </Text>
        </View>
      </TouchableOpacity>
      <ModalTodo item={item} isEdit isOpen={isEdit} closeHandler={setIsEdit} />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
  },
});
