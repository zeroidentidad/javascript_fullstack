import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import HomeListScreen from './src/screens/HomeListScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen:  HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  HomeListScreen: {
    screen: HomeListScreen
  }
},
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#48BBEC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  });

export default class App extends Component {
  render() {
    return ( 
    <AppNavigator />
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
