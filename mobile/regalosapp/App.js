import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpScreen />
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
