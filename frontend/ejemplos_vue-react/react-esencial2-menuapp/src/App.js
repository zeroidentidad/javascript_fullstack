import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Dish /*, * as D*/ from './components/Dish';
import NewDish from './components/NewDish';
import Button from '@material-ui/core/Button';

export default class App extends Component {
  dish = "Tacos";
  //let dishes = ["Tacos", "Ceviche", "Paella"];

  showDishes = (e) => {
    e.preventDefault();
    this.props.history.push("/platillos");
  }

  render() {
    return(
    <div className="App">
      <Header />
      <NewDish />
      <Button 
      variant="contained"
      color="secondary"
      onClick={this.showDishes}
      >
      Mostrar
      </Button>
      {/*<Dish nombre={dish} cantidad="4"/>*/}
      <br/>Me gustan los {this.dish}
      {/*<ul>{ dishes.map(dish => (<li>{dish}</li>)) }</ul>*/}
    </div>
    );
  }
}
