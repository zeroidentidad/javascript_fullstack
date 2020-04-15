import React, { Component } from 'react'
import { Button } from '@material-ui/core';

export default class LoginButton extends Component {
    render() {
        return (
            <Button onClick={this.props.login} style={{color: 'white'}}>Iniciar sesión</Button>
        )
    }
}
