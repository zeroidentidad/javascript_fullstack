import React, { Component } from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

export default class AuthLoading extends Component {
    componentDidMount(){
        this.getUser()
    }
    getUser(){
        auth().onUserChanged((user)=>{
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
