import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default class LogoutButton extends Component {

    state = {
        anchorEl: null
    }

    handleMenu = e => {
        this.setState({ anchorEl: e.currentTarget })
    }        

    handleClose () {
        this.setState({ anchorEl: null })
    };    

    render() {
        const open = Boolean(this.state.anchorEl);
        return (
            <div>
              <IconButton
                aria-label="usuario"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={()=>this.handleClose()}
              >
                <MenuItem onClick={this.props.logout}>Cerrar sesión</MenuItem>
              </Menu>
            </div>
        )
    }
}
