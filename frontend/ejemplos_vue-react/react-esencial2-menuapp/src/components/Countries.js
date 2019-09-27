import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Country from "./Country";

export default class Countries extends Component {

    constructor(){
        super();
        this.state = {
            countries: []
        }
    }

    componentDidMount(){
        this.getCountries()
    }

    getCountries(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => this.setState({countries: data}))
        .catch(err => console.log(err))
    }

    delete = (name) => {
        let newState = { ...this.state };

        newState.countries = newState.countries.filter(
            country => country.name !== name
        );

        this.setState(newState);
    };    

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
                <ul>
                    {this.state.countries.map((country, index) => (
                        <Country key={index} name={country.name} onDelete={this.delete} />
                    ))}
                </ul>                                 
            </div>
        )
    }
}
