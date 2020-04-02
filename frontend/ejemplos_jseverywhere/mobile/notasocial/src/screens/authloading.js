import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';

const AuthLoading = props => {

    const checkLoginState = async () => {
        // recuperar el valor del token
        const userToken = await AsyncStorage.getItem('token');
        // navegar a la pantalla de la aplicación si hay un token presente
        // de lo contrario, navegar a pantalla de autenticación
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };   
    
    useEffect(() => {
        checkLoginState();
    });
    
    return <Loading />;
};

export default AuthLoading;