import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import login_background from '../images/login_background.jpg'
import Title from '../components/Title'

export default class Login extends Component {
    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <div>
                        <Title />
                        <TextField id="email" label="Email" type="email" className="text-field" fullWidth/>
                        <TextField id="password" label="Contraseña" type="password" className="text-field" fullWidth/>
                    </div>
                    <div className="Login-actions">
                        <Button variant="contained" color="secondary" onClick={() => alert('kepedo')} >Ingresar</Button>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="Login-background" style={{ backgroundImage: `url("${login_background}")` }}></div>
                </div>
            </div>
        )
    }
}
