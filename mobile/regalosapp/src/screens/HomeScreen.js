import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';

export default class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor')||'#b3002d',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton icon="settings-power" color="white"/>
            )
        }
    }

    setNavigationColor=(color)=>{
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    render() {
        return (
            <HomeComponent setNavigationColor={this.setNavigationColor}/>
        )
    }
}
