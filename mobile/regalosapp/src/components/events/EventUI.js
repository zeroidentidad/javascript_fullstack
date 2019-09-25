import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

const EventUI = (props) => {
    return (
        <View>
            <Text>Evento</Text>
            <Button onPress={()=>props.openContactsScreen()}>Agregar invitados</Button>
        </View>
    )
}

export default EventUI
