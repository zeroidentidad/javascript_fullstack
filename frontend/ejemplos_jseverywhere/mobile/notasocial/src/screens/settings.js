import React from 'react';
import { View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Settings = props => {

    // eliminar token y navegar a pantalla de autenticación
    const signOut = () => {
        AsyncStorage.removeItem('token').then(
            props.navigation.navigate('Auth')
        );
    };

    return (
        <View>
            <Button title="Salir" onPress={signOut} />
        </View>
    );
};

Settings.navigationOptions = {
    title: 'Opciones'
};

export default Settings;