import React from 'react';
import { View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Settings = props => {
    return (
        <View>
            <Button title="Salir" />
        </View>
    );
};

Settings.navigationOptions = {
    title: 'Settings'
};

export default Settings;