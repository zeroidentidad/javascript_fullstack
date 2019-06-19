/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
//import { Platform, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/app.navigator'
import stores from './app/stores'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider stores={stores}>
      <AppNavigator/>
      </Provider>
    );
  }
}