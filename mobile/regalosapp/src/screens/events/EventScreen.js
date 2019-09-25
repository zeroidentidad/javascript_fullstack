import React, { Component } from 'react';
import { Text, View } from 'react-native';
import EventUI from '../../components/events/EventUI'

export default class EventScreen extends Component {
    componentDidMount(){
        this.eventId = this.props.navigation.getParam('eventId');
        console.warn(this.eventId);
    }
    render() {
        return (
            <EventUI />
        )
    }
}
