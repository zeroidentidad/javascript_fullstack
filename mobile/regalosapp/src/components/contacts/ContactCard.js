import React from 'react';
import {Image, View} from 'react-native';
import {Card, Title, IconButton} from 'react-native-paper';
import styles from '../../stylesheets/login.stylesheet';

const ContactCard = (props) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Image source={{uri: props.user.avatar}}/>
                <View>
                    <Title>{props.user.name}</Title>
                </View>
                <IconButton icon="person-add" onPress={()=>props.addContactToEvent(props.user)}/>
            </Card.Content>
        </Card>
    )
}

export default ContactCard
