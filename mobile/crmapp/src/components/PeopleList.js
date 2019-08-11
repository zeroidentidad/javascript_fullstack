import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PeopleList extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bienvenida}>Haz ingresado para ver la info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  bienvenida: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
});
