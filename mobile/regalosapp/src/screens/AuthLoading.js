import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class AuthLoading extends Component {
    componentDidMount(){
        this.getUser()
    }
    getUser(){
        if(false){
            this.props.navigation.navigate('App');
        }else{
            this.props.navigation.navigate('Auth');
        }
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
