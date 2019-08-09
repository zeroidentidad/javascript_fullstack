/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import Login from "./Login";

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDVLINghsJEgRlPaMI38Oj5_zt4UC8OX5Q",
      authDomain: "crmapp-rn.firebaseapp.com",
      databaseURL: "https://crmapp-rn.firebaseio.com",
      projectId: "crmapp-rn",
      storageBucket: "crmapp-rn.appspot.com",
      messagingSenderId: "877801036363",
      appId: "1:877801036363:web:7ab325e40334a766"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bienvenida}>Bienvenid@ a CRMApp</Text>
        <Login />
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
  },
  bienvenida: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
