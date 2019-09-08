import React, { Component } from 'react'
import AuthUI from '../components/AuthUI';
import auth from '@react-native-firebase/auth';

export default class LoginScreen extends Component {
    constructor(props) {
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

    login = async() => {
       try {
           let res = await auth().signInWithEmailAndPassword(this.state.email, this.state.password);
           let { user } = res;
           //console.warn(user);          
       } catch (err) {
           alert(err);
       }
    }

    render() {
        return (
            <AuthUI 
            setEmail={this.setEmail} 
            setPassword={this.setPassword} 
            mainAction={this.login}
            mainButtonTitle="Ingresar"
            secondaryButtonTitle="NO tengo cuenta, crear"
            navigationAction={()=>{this.props.navigation.navigate('SignUp')}}            
            />
        )
    }
}
