import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
