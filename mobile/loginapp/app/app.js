import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './modules/Login/containers/login';
import Registro from './modules/Login/containers/registro';

const LoginNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            title: 'Demo App'
        }
    },
    Registro:{
        screen: Registro,
        navigationOptions: {
            title: 'Registrarse'
        }
    }
}, {headerLayoutPreset:'center'});

export default createAppContainer(LoginNavigator);