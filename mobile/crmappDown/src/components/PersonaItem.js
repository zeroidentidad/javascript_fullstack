import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from "react-redux";
import { getTheme } from "react-native-material-kit";
import Icon from "react-native-vector-icons/EvilIcons";
import * as actions from '../actions';

const theme = getTheme()

// stateLess component
const PersonaItem = (props) => {
    return (
        <View style={[theme.cardStyle, styles.card]}>
            <Image source={require('../img/background.jpg')}
            style={[theme.cardImageStyle, styles.image]}
            />
            <Icon 
            name={'user'}
            size={100}
            style={styles.icon}
            />
            <Text 
            style={[theme.cardTitleStyle, styles.title]}
            >{props.personas.first_name} {props.personas.last_name}</Text>
            <Text 
            style={[theme.cardActionStyle, styles.action]}
            >{props.personas.company}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: '#000033',
        color: 'white'
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 1,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    }
});

export default connect(null, actions)(PersonaItem)