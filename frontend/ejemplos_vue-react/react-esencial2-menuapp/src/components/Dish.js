import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';

export default class Dish extends Component {
    ingredientes = ["Tortilla", "Carne", "Cebolla"];
    contarIngredientes(){
        return this.ingredientes.length;  
    }
    render() {
        return (
            <div className="dish">
                <h2>{this.props.nombre}</h2>
                <h3>Cantidad: {this.props.cantidad}</h3>
                <h4>Ingredientes: {this.contarIngredientes()}</h4>
                <ul>{this.ingredientes.map((ingrediente, index) => (<li key={index}>{ingrediente}</li>))}</ul>
                {/*<Ingredient />*/}
                <Button variant="contained" color="primary">Elegir</Button>
            </div>
        )
    }
}

export class Ingredient extends Component {
    render() {
        //return React.createElement('h4', {}, "Ingrediente")
        return (
            <Fragment>
                <h4>Ingredientes</h4>
                <h4>Ingredientes</h4>
            </Fragment>
        )        
    }
}

export  class Flag extends Component {
    render() {
        return (
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
}