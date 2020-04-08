import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';

export default class MyAppBar extends Component {
    render() {
        return (
            <AppBar style={{backgroundColor: indigo['A600']}}>
                <Typography  style={{marginLeft: '1rem' }} variant="h6">Places</Typography>
            </AppBar>
        )
    }
}
