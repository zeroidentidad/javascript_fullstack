import React from 'react';
import {Image, View} from 'react-native';
import {Card, Title, IconButton} from 'react-native-paper';
import styles from '../../stylesheets/base.stylesheet';

const ContactCard = (props) => {
    return (
        <Card style={styles.card}>
            <Card.Content style={{flexDirection: 'row'}}>
                <Image style={{with:40, height:40}} source={{uri: props.user.avatar}}/>
                <View style={{flex:1, marginLeft:8}}>
                    <Title>{props.user.name}</Title>
                </View>
                <IconButton icon="person-add" onPress={()=>props.addContactToEvent(props.user)}/>
            </Card.Content>
        </Card>
    )
}

export default ContactCard
