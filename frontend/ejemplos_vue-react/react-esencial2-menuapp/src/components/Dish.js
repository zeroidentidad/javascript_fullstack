import React, { Component, Fragment } from 'react'
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
  TextField,
  IconButton  
} from "@material-ui/core";
import ScatterPlot from "@material-ui/icons/ScatterPlot";
import Button from '@material-ui/core/Button';
import Edit from "@material-ui/icons/Edit";

export default class Dish extends Component {

    state = {
        edit: false,
        name: this.props.name
    }

    edit = e => {
        this.setState({ edit: !this.state.edit });
    };

    handleChange = e => {
        let newState = { ...this.state };
        newState.name = e.currentTarget.value;

        this.setState(newState);
        this.props.onUpdateDish(this.props.index, newState.name);        
    };

    /*contarIngredientes(){
        return this.ingredientes.length;  
    }*/
    
    render() {
        //const { params } = this.props.match;
        return (
            /*<div className="dish">
                <h2>{params.name}</h2>
                <h2>{this.props.name}</h2>
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
                    <ListSubheader component="div">
                    {this.state.edit ? (
                    <TextField
                    label="Platillo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    ) : (this.props.name)
                    }
                    <IconButton size="small" onClick={this.edit}>
                    <Edit />
                    </IconButton>
                    </ListSubheader>
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