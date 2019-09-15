import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import HomeComponent from '../components/HomeComponent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux';
import {addEvent, removeEvent} from '../actions/events';

class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                backgroundColor: navigation.getParam('backgroundColor')||'#b3002d',
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerRight: (
                <IconButton 
                icon="settings-power" 
                color="white" 
                onPress={
                    ()=>{
                        auth().signOut();
                        navigation.navigate('Auth')
                    }
                }
                />
            )
        }
    }

    setNavigationColor=(color)=>{
        this.props.navigation.setParams({
            backgroundColor: color
        })
    }

    goToAddEvent = () => {
        this.props.navigation.navigate('AddEvent');
    }

    componentDidMount(){
        this.db = firestore();
        this.readEvents();
    }

    readEvents = async()=>{
        let ref = await this.db.collection('users').doc(this.props.user.uid).collection('events');//.get();
        /*let events = ref.docs.forEach(docRef => {
            this.props.addEvent(docRef.data());
        });*/
        ref.onSnapshot((querySnapshot)=>{
            querySnapshot.docChanges().forEach((change) => {
                if(change.type=='added'){
                    this.props.addEvent({ ...change.doc.data(), id: change.doc.id });
                }
                if (change.type=='removed') {
                    this.props.removeEvent(change.doc);
                }
            });
        })
    }

    render() {
        return (
            <HomeComponent 
            setNavigationColor={this.setNavigationColor}
            goToAddEvent={this.goToAddEvent}
            events={this.props.events}
            />
        )
    }
}

export default connect((state)=>{
    return {user: state.user, events: state.events}
},{
    addEvent,
    removeEvent
})(HomeScreen)