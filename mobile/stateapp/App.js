/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import AppLayout from './app/appLayout';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      saludo: 'Hola prros del mal',
      user: 256,
      userName: 'x',
      password: '1234'
    }
  }

  sumarUsuario = () => {
    this.setState({
      user: this.state.user+1
    })
  }  

  render() {

    let {saludo} = this.state
    let {user} = this.state
    let {userName} = this.state

    return (
      <View style={styles.container}>
        <Text style={{fontSize:24, padding:10}}>{saludo}, Usuario: {user}</Text>
        <Text style={{ fontSize: 24, padding: 10 }}>User Name: {userName}</Text>
        <TextInput 
        style={{ fontSize: 24, padding: 10 }}
          onChangeText={(userName) => this.setState({ userName })}
        >{userName}</TextInput>
        <Button style={{ padding: 10 }} title="Sumar usuario" onPress={this.sumarUsuario}></Button>
        <AppLayout 
        saludo="Que pedo" 
        userName={this.state.userName}
        password={this.state.password}
        />
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
