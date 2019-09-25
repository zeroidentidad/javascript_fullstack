import React, { Component } from 'react';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import ContactsUI from '../../components/contacts/ContactsUI';

export default class ContactsScreen extends Component {

    constructor(props){
        super(props);
        this.state =  {
            hasPermission: false,
            contacts: []
        }
    }

    componentDidMount(){
        this.requestPermissions();
    }

    requestPermissions = async() =>{
        try {
            let granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Acceder a contactos',
                    'message': 'Esta aplicación quiere leer tus contactos para poder hacer invitaciones.'
                }
            );
            if (granted == PermissionsAndroid.RESULTS.GRANTED){
                this.setState({hasPermission: true})
                this.queryContacts();
                return;
            } else {
                this.props.navigation.goBack()  
            }           
        } catch (err) {
            alert(err);
            this.props.navigation.goBack()            
        }        
    }

    queryContacts = (query='') => {
        Contacts.getContactsMatchingString(query, (err, contactsFromPhone)=>{
            if (err) { alert(err); }
            let contacts = contactsFromPhone.map((contact)=>({
                name: contact.givenName,
                avatar: contact.thumbnailPath,
                id: contact.recordID
            }))
            this.setState({ contacts })
        })
    }

    render() {
        return (
            <ContactsUI
            queryContacts={this.queryContacts}
            contacts={this.state.contacts}
            />
        )
    }
}
