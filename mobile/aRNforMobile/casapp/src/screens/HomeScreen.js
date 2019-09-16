import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
      <Text>Home Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});