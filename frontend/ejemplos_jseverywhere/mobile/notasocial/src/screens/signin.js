import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SignIn = props => {

    // almacenar token con un valor clave de `token`
    // después de almacenar token, navegar a pantalla principal

    const storeToken = () => {
        AsyncStorage.setItem('token', 'abc').then(
            props.navigation.navigate('App')
        );
    };

    return (
        <View>
            <Button title="Registrarse!" onPress={storeToken} />
        </View>
    );
}

SignIn.navigationOptions = { 
    title: 'Registrarse'
 }

export default SignIn;