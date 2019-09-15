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

    add = ({title, date}) => {
        //Guardar en firebase:

        //Crear slug del titulo:
        let slug = slugify(title);

        console.warn(slug);
        console.warn(this.props.user);

        //Guardar doc del user:
        //this.db.collection('users').doc()

        //Guardar coleccion eventos:

        this.db
    }
    
    render() {
        return (
            <AddEventUI add={this.add} />
        )
    }
}

export default connect(({user})=>{return {user}})(AddEventScreen)