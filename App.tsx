import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {List} from './components/List/List';
import {setupStore} from './store/store';

const App = () => {
  const store = setupStore();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <List />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
