import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';

export default class MyAppBar extends Component {
    render() {
        //console.log(this.props)
        return (
            <AppBar style={{backgroundColor: indigo['A600']}}>
                <Typography 
                    style={{marginLeft: '1rem', cursor: 'pointer' }} 
                variant="h6"
                onClick={this.props.goHome}
                >
                Places
                </Typography>
            </AppBar>
        )
    }
}
