import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import login_background from '../images/login_background.jpg'
import friends from '../images/friends.jpg'
import Title from '../components/Title'
import Container from '../components/Container'
import { Route, Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                    <div style={{textAlign: 'left'}}>
                        <Title />
                        <TextField id="email" label="Email" type="email" className="text-field" fullWidth/>
                        <TextField id="password" label="Contraseña" type="password" className="text-field" fullWidth/>
                        <div className="Login-actions">
                        <Route exact path="/login" render={()=>{
                            return(
                                <React.Fragment>
                                <Link to="/signup" style={{ marginRight: '1rem' }}>Crear cuenta</Link>
                                <Button variant="contained" color="secondary" onClick={() => alert('kepedo')} >Ingresar</Button>
                                </React.Fragment>
                            )
                        }} />
                        <Route exact path="/signup" render={()=>{
                            return(
                                <React.Fragment>
                                <Link to="/login" style={{ marginRight: '1rem' }}>Ya tengo cuenta</Link>
                                <Button variant="contained" color="secondary" onClick={() => alert('kepedo')} >Crear cuenta</Button>
                                </React.Fragment>
                            )
                        }} />                        
                        </div>
                    </div>
                    </Container> 
                </div>
                <div className="col-xs-12 col-sm-6">
                        <div>
                        <Route exact path="/login" render={()=>(
                        <div className="Login-background" style={{ backgroundImage: `url("${login_background}")` }}></div>
                        )} />
                        <Route exact path="/signup" render={()=>(
                        <div className="Login-background" style={{ backgroundImage: `url("${friends}")` }}></div>
                        )} />                        
                        </div>                   
                </div>
            </div>
        )
    }
}
