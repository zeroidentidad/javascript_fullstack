import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {login} from '../actions/user'

class AuthLoading extends Component {
    componentDidMount(){
        this.getUser()
    }
    getUser(){
        auth().onUserChanged((user)=>{
            this.props.login(user); 
            this.props.navigation.navigate(user ? "App" : "Auth"); //user true
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

export default connect(()=>{ return {}}, {login})(AuthLoading)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
