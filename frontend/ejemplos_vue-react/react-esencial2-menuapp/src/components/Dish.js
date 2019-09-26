import React, { Component, Fragment } from 'react'
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import ScatterPlot from "@material-ui/icons/ScatterPlot";
import Button from '@material-ui/core/Button';

export default class Dish extends Component {
    ingredientes = ["Tortilla", "Carne", "Cebolla"];
    contarIngredientes(){
        return this.ingredientes.length;  
    }
    render() {
        //const { params } = this.props.match;
        return (
            /*<div className="dish">
                <h2>{params.nombre}</h2>
                <h2>{this.props.nombre}</h2>
                <h3>Cantidad: {this.props.cantidad}</h3>
                <h4>Ingredientes: {this.contarIngredientes()}</h4>
                <ul>{this.ingredientes.map((ingrediente, index) => (<li key={index}>{ingrediente}</li>))}</ul>
                <Button variant="contained" color="primary">Elegir</Button>
            </div>*/
            <Card className="card">
                <CardContent>
                    <List
                    component="nav"
                    subheader={
                    <ListSubheader component="div">{this.props.nombre}</ListSubheader>
                    }
                    >
                    {
                    this.props.ingredients.map((ingredient, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon> <ScatterPlot /> </ListItemIcon>
                        <ListItemText inset primary={ingredient} />
                    </ListItem>
                    ))
                    }
                    </List>
                </CardContent>
            </Card>            
        )
    }
}

export class Ingredient extends Component {
    render() {
        //return React.createElement('h4', {}, "Ingrediente")
        return (
            <Fragment>
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