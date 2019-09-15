import React, { Component } from 'react'
import AddEventUI from '../../components/events/AddEventUI';
import firestore from '@react-native-firebase/firestore';
import slugify from '../../lib/slugify';
import {connect} from 'react-redux';
import {login} from '../../actions/user';

class AddEventScreen extends Component {

    componentDidMount(){
        this.db = firestore();
    }

    add = async({title, date}) => {
        //Crear slug del titulo:
        let slug = slugify(title);
        //Guardar doc del user:
        await this.db.collection('users').doc(this.props.user.uid).collection('events').doc(slug).set({
            title,
            date
        })
        //Guardar coleccion eventos:
        await this.db.collection('events').doc(slug).set({
            title,
            date
        })

        this.props.navigation.navigate('Home');
    }
    
    render() {
        return (
            <AddEventUI add={this.add} />
        )
    }
}

export default connect(({user})=>{return {user}})(AddEventScreen)