import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth';

export default class AuthLoading extends Component {
    componentDidMount(){
        this.getUser()
    }
    getUser(){
        auth().onUserChanged((user)=>{
            this.props.navigation.navigate(false ? "App" : "Auth"); //user true
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> CARGANDO... </Text>
            </View>
        )
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
