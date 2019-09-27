import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
//import Dish , * as D from './components/Dish';
import Dishes from './components/Dishes';
import NewDish from './components/NewDish';
import Button from '@material-ui/core/Button';
import data from './assets/data/dishes.json';

export default class App extends Component {

  state = {
    dish: "Tacos",
    dishes: data
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  }

  updateDish = (index, updatedName) => {
    let newState = { ...this.state };
    newState.dishes.dishes[index].name = updatedName;

    this.setState(newState);
  };

  addDish = (dishName) => {
    let newState = { ...this.state };

    const newDish = {
      id: newState.dishes.dishes.length,
      name: dishName,
      country: "México",
      ingredients: ["Azucar", "Flores", "Sustancia X"]
    };

    newState.dishes.dishes.push(newDish);

    this.setState(newState);
  };  

  render() {
    return(
    <div className="App">
      <Header />
      <NewDish onAddDish={this.addDish} />
      <Button 
      variant="contained"
      color="secondary"
      onClick={this.showDishes}
      >
      Lista anterior
      </Button>
      <Dishes data={this.state.dishes} onUpdateDish={this.updateDish}></Dishes>
      {/*<Dish nombre={dish} cantidad="4"/>*/}
      <br/>Me gustan los {this.dish}
      {/*<ul>{ dishes.map(dish => (<li>{dish}</li>)) }</ul>*/}
    </div>
    );
  }
}
