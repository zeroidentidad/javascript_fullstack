import React, {Component} from 'react';
import AppNavigator from './Navigator';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppNavigator />
    );
  }
}