import React, { Component } from 'react'
import AuthUI from '../components/AuthUI';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {login} from '../actions/user';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
       this.props.login({name: 'test'});
    }

    componentDidUpdate(){
        console.warn(this.props.user)
    }

    login = async({email, password}) => {
       try {
           let res = await auth().signInWithEmailAndPassword(email, password);
           let { user } = res;
           //console.warn(user);
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
            mainAction={this.login}
            mainButtonTitle="Ingresar"
            secondaryButtonTitle="NO tengo cuenta, crear"
            navigationAction={()=>{this.props.navigation.navigate('SignUp')}}            
            />
        )
    }
}

export default connect(
    (state) => ({user: state.user}),
    {
        login: login
    }
)(LoginScreen)