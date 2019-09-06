import React, { Component } from 'react'
import SignUp from '../components/SignUp'

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
        console.warn(this.state)
    }

    render() {
        return (
            <SignUp setEmail={this.setEmail} setPassword={this.setPassword} createUser={this.createUser}/>
        )
    }
}
