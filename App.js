import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home'
import Detail from './pages/Detail'
import { StackNavigator } from 'react-navigation';
import Navigator from './navigator/AppNavigator'
import { Provider } from 'react-redux'
import store from './store'


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
        <Navigator />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
