import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './src/Navigator';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const miTema = {
  ...DefaultTheme,
  roundness: 7,
  colors: {
    ...DefaultTheme.colors,
    primary: '#b3002d',
    accent: '#00bfff'
  }
}

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={miTema}>
        <AppNavigator />
      </PaperProvider>
    );
  }
}