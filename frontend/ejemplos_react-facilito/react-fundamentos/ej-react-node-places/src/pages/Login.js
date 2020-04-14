import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';
import {connect} from "react-redux";
import login_background from '../images/login_background.jpg'
import friends from '../images/friends.jpg'
import Title from '../components/Title'
import Container from '../components/Container'
import {login, signUp} from '../requests/auth'
import * as actions from '../redux/actions/userActions'

class Login extends Component {

    constructor(props){
        super(props)
        this.requestAuth = this.requestAuth.bind(this)
        this.createAccount = this.createAccount.bind(this)
    }

    state = {email: '', password: ''}

    leerDato= e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    requestAuth(){
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }

        login(credentials).then(data => {
            this.props.dispatch(actions.login(data.jwt))
        }).catch(console.log)
    }

    createAccount(){
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }

        signUp(credentials).then(console.log).catch(console.log)
    }

    render() {
        return (
            <div className="row middle-xs">
                <div className="col-xs-12 col-sm-6">
                    <Container>
                    <div style={{textAlign: 'left'}}>
                        <Title />
                        <TextField 
                        name="email"
                        label="Email" 
                        type="email" 
                        className="text-field" 
                        fullWidth
                        value={this.state.email}
                        onChange={this.leerDato}
                        />
                        <TextField name="password"
                        label="Contraseña" 
                        type="password" 
                        className="text-field" 
                        fullWidth
                        value={this.state.password}
                        onChange={this.leerDato}
                        />
                        <div className="Login-actions">
                        <Route exact path="/login" render={()=>{
                            return(
                                <React.Fragment>
                                <Link to="/signup" style={{ marginRight: '1rem' }}>Crear cuenta</Link>
                                <Button variant="contained" color="secondary" onClick={this.requestAuth} >Ingresar</Button>
                                </React.Fragment>
                            )
                        }} />
                        <Route exact path="/signup" render={()=>{
                            return(
                                <React.Fragment>
                                <Link to="/login" style={{ marginRight: '1rem' }}>Ya tengo cuenta</Link>
                                <Button variant="contained" color="secondary" onClick={this.createAccount} >Crear cuenta</Button>
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

const mapStateToProps=(state, props) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)
