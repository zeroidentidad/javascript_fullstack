import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';
import auth from '@react-native-firebase/auth';

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
                <IconButton 
                icon="settings-power" 
                color="white" 
                onPress={
                    ()=>{
                        auth().signOut();
                        navigation.navigate('Auth')
                    }
                }
                />
            )
        }
    }

    setNavigationColor=(color)=>{
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    goToAddEvent = () => {
        this.props.navigation.navigate('AddEvent');
    }

    render() {
        return (
            <HomeComponent 
            setNavigationColor={this.setNavigationColor}
            goToAddEvent={this.goToAddEvent}
            />
        )
    }
}
