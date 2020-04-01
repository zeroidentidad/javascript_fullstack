import React from 'react';
import { Text, View } from 'react-native';

const MyNotes = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Mis Notas</Text>
        </View>
    );
};

MyNotes.navigationOptions = {
    title: 'Mis Notas'
};

export default MyNotes;