import React, { Component } from 'react'
import SignUp from '../components/SignUp';
import auth from '@react-native-firebase/auth';

export default class SignUpScreen extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }

    setEmail = (email) => {
        this.setState({
            email: email
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password
        })
    }

    createUser = () => {
        auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
            let user = res.user;
            console.warn(user);
        })
    }

    render() {
        return (
            <SignUp setEmail={this.setEmail} setPassword={this.setPassword} createUser={this.createUser}/>
        )
    }
}
