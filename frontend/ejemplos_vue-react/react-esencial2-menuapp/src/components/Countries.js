import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Countries extends Component {

    getCountries(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Paises</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.getCountries}
                >
                Cargar
                </Button>                 
            </div>
        )
    }
}
