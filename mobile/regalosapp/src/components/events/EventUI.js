import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Title, Paragraph } from 'react-native-paper';
import ContactCard from '../contacts/ContactCard';

const EventUI = (props) => {
    return (
        <View>
            <Title> Evento: {props.event.title}</Title>
            <Title> Fecha: {new Date(props.event.date).toLocaleDateString()}</Title>
            <Title> Invitados</Title>
            <FlatList 
            data={props.contacts}
            renderItem={({item})=> <ContactCard user={item} /> }
            />
            <Button onPress={()=>props.openContactsScreen()}>Agregar invitados</Button>
        </View>
    )
}

export default EventUI
