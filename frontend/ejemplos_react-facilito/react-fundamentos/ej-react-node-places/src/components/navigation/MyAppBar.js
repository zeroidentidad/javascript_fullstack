import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class MyAppBar extends Component {

    getName(){
        if(this.props.user.name&&this.props.user.email){
            return this.props.user.name
        } else if (this.props.user.email){
            return this.props.email.split("@")[0]
        }
        return ""
    }

    title(){
        return (
        <span style={{textTransform: 'capitalize'}}> 
        {this.props.user.jwt ? `Bienvenido ${this.getName()}` : 'Places'}
        </span>
        )
    }

    render() {

        return (
            <AppBar style={{backgroundColor: indigo['A600']}}>
            <Toolbar>
                <Typography 
                style={{marginLeft: '1rem', cursor: 'pointer', flexGrow: 1 }} 
                variant="h6"
                onClick={this.props.goHome}
                >
                {this.title()}
                </Typography>
                {this.props.user.jwt ? <LogoutButton logout={this.props.logout}/> : <LoginButton login={this.props.login}/> }
            </Toolbar>
            </AppBar>
        )
    }
}
