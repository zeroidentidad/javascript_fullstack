/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import Login from "./Login";
import Loader from './Loader';
//import PeopleList from './PeopleList';
import Navigation from './Navigation';
import reducers from '../reducers/PeopleReducer';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends Component {

  state = {loggedIn: null};

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

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn: true})
      }else{
        this.setState({loggedIn: false})
      }
    })
  }

  renderInitView(){
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />
      case false:
        return <Login />
      default:
        return <Loader/>
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.bienvenida}>CRM App</Text>
          {this.renderInitView()}
        </View>
      </Provider>
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
    margin: 2,
  }
});
