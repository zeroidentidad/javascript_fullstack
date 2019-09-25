import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../../stylesheets/login.stylesheet';
import Empty from '../utils/Empty'
import ContactCard from './ContactCard';

const ContactsUI = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
            ListEmptyComponent={Empty}
            data={props.contacts}
            renderItem={
                ({item}) => <ContactCard addContactToEvent={props.addContactToEvent} user={item}/>
            }
            ></FlatList>
        </View>
    )
}

export default ContactsUI
