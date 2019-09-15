import React, { Component } from 'react'
import AuthUI from '../components/AuthUI';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {connect} from 'react-redux';
import {login} from '../actions/user';

class SignUpScreen extends Component {
    constructor(props){
        super(props);
        this.db = firestore();
    }

    createUser = async({email, password}) => {
       try {
           let res = await auth().createUserWithEmailAndPassword(email, password);
           let { user } = res;
           await this.db.collection('users').doc(user.uid).set({email: user.email});
           this.props.login(user);          
       } catch (err) {
           alert(err);
       }
    }

    render() {
        return (
            <AuthUI 
            setEmail={this.setEmail} 
            setPassword={this.setPassword} 
            mainAction={this.createUser}
            mainButtonTitle="Registrar usuario"
            secondaryButtonTitle="Ya tengo cuenta"
            navigationAction={()=>{this.props.navigation.navigate('Login')}}
            />
        )
    }
}

export default connect(
    (state) => ({user: state.user}),
    {
        login: login
    }
)(SignUpScreen)
