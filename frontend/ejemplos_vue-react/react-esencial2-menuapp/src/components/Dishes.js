import React, { Component } from 'react';
import {
    Button,
    /*List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon,*/
    GridList    
}from '@material-ui/core';
import Restaurant from '@material-ui/icons/Restaurant';
import data from '../assets/data/dishes.json';
import Dish from './Dish.js';

export default class Dishes extends Component {

    goBack = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }

    updateDish = (index, updatedName) => {
        this.props.onUpdateDish(index, updatedName);
    };   

    render() {
        return (
            <div>
                <h1>Platillos</h1>
                {
                this.props.data ?
                <div></div>
                :
                <Button
                variant="contained"
                color="secondary"
                onClick={this.goBack}
                >
                Regresar
                </Button>                
                } 
                {
                /*data.dishes.map(dish=>(
                    <div>
                        <div>{dish.name}</div>
                        <div>{dish.ingredients}</div>
                        <br/>
                    </div>
                ))*/
                } 
                {/*<List
                component="nav"
                subheader={
                    <ListSubheader component="div">
                        Platillos
                    </ListSubheader>
                }
                >
                {
                    data.dishes.map((dish, index)=>(
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <Restaurant />
                            </ListItemIcon>
                            <ListItemText
                            inset
                            primary={dish.name}
                            >
                            </ListItemText>
                        </ListItem>
                    ))
                }
                </List> */}
                <GridList>
                {
                this.props.data ?
                this.props.data.dishes.map((dish, index)=>(
                    <Dish 
                    key={index} 
                    name={dish.name}
                    ingredients={dish.ingredients}
                    index={index}
                    onUpdateDish={this.updateDish}
                    />
                ))
                :
                data.dishes.map((dish, index)=>(
                    <Dish
                    key={index}
                    name={dish.name}
                    ingredients={dish.ingredients}
                    index={index}
                    />
                ))                
                } 
                </GridList>                          
            </div>
        )
    }
}
