import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Title, Paragraph } from 'react-native-paper';
import ContactCard from '../contacts/ContactCard';
import SecretContactCard from '../contacts/SecretContactCard';

const EventUI = (props) => {
    return (
        <View style={{flex:1}}>
            <Title> Evento: {props.event.title}</Title>
            <Title> Fecha: {new Date(props.event.date).toLocaleDateString()}</Title>
            <View>
                <Button 
                mode="contained" 
                disabled={props.contacts.length<3}
                onPress={props.shuffleUsers}
                >Asignar compañero
                </Button>
            </View>
            <Title> Invitados</Title>
            <FlatList 
            data={props.contacts}
                renderItem={({ item }) =>  
                    !item.friend ? (<ContactCard user={item} />):(<SecretContactCard user={item} />)
                }
            />
            <Button onPress={()=>props.openContactsScreen()}>Agregar invitados</Button>
        </View>
    )
}

export default EventUI
