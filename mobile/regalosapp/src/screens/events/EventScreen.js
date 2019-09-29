import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EventUI from '../../components/events/EventUI';
import firestore from '@react-native-firebase/firestore';
import arrayShuffle from 'array-shuffle';

export default class EventScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            event: {},
            contacts: []
        }
    }

    componentDidMount(){
        this.eventId = this.props.navigation.getParam('eventId');
        this.db = firestore();

        this.findEventOnFirebase();
    }

    findEventOnFirebase = async() =>{
        let eventRef = await this.db.collection('events').doc(this.eventId);
        let doc = await eventRef.get();
        let event = doc.data();

        this.setState({event: event});

        eventRef.collection('contacts').onSnapshot((querySnapshot)=>{
            querySnapshot.docChanges().forEach((change) => {
                if (change.type == 'added') {
                    this.addContact({ uid: change.doc.id, ...change.doc.data() });
                }
            });
        })
    }

    shuffleUsers = async () => {
        let contactsRandom = arrayShuffle(this.state.contacts);

        for(let i=0; i<contactsRandom.length; i++){
            let currentUser = contactsRandom[i];
            let nextUser;

            if (i === (contactsRandom.length-1)){
                nextUser = contactsRandom[0];
            }else{
                nextUser = contactsRandom[i+1];
            }

            await firestore().collection('events').doc(this.eventId).collection('contacts').doc(currentUser.uid).update({
                friend: {
                    name: nextUser.name,
                    avatar: nextUser.avatar
                }
            })
        }
        
        return true;
    }

    addContact = (contact) =>{
        this.setState({contacts: this.state.contacts.concat([contact])});
    }

    openContactsScreen = () =>{
        this.props.navigation.navigate('Contacts', {
            eventId: this.eventId
        })   
    }
    render() {
        return (
            <EventUI 
            openContactsScreen={this.openContactsScreen}
            event={this.state.event}
            contacts={this.state.contacts}
            shuffleUsers={this.shuffleUsers}
            />
        )
    }
}
