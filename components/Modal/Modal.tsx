import React, {useCallback, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch} from '../../hooks/redux';
import {ITodo} from '../../models/ITodo';
import {todoSlice} from '../../store/reducers/TodoSlice';
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';

interface ModalTodoProps {
  isOpen: boolean;
  closeHandler: React.Dispatch<React.SetStateAction<boolean>>;
  item?: ITodo;
  isEdit?: boolean;
}

export const ModalTodo = ({
  isOpen,
  closeHandler,
  isEdit = false,
  item,
}: ModalTodoProps) => {
  const [text, setText] = useState(isEdit && item ? item.title : '');
  const {add, edit, deleteTodo} = todoSlice.actions;
  const disaptch = useAppDispatch();

  const closeModalHandler = useCallback(() => {
    closeHandler(false);
  }, [closeHandler]);
  const editTodoHandler = useCallback(() => {
    disaptch(
      edit({
        id: item!.id,
        title: text,
      }),
    );
    closeHandler(false);
  }, [isEdit, text]);
  const addTodoHandler = useCallback(() => {
    disaptch(
      add({
        id: new Date().getTime(),
        title: text,
      }),
    );
    setText('');
    closeHandler(false);
  }, [text]);

  const deleteTodoHandler = useCallback(() => {
    disaptch(deleteTodo(item!.id));
    closeHandler(false);
  }, [isEdit, item]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={closeModalHandler}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>{text}</Text>
          <Input value={text} textChangeHandler={setText} />
          <View style={styles.buttonGroup}>
            <Button
              pressHandler={closeModalHandler}
              title="Cancel"
              type="outline"
            />
            {isEdit ? (
              <Button
                pressHandler={deleteTodoHandler}
                title="Delete"
                type="danger"
              />
            ) : null}
            {isEdit ? (
              <Button
                pressHandler={editTodoHandler}
                title="Edit"
                type="primary"
              />
            ) : (
              <Button
                pressHandler={addTodoHandler}
                title="Add"
                type="primary"
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalView: {
    width: '100%',
    height: 'auto',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonGroup: {
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
