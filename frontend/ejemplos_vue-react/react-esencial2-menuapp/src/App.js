import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Dish /*, * as D*/ from './components/Dish';
import NewDish from './components/NewDish';

function App() {
  let dish = "Tacos";
  //let dishes = ["Tacos", "Ceviche", "Paella"];
  return (
    <div className="App">
      <Header />
      <NewDish />
      <Dish nombre={dish} cantidad="4"/>
      Me gustan los {dish}
      {/*<ul>{ dishes.map(dish => (<li>{dish}</li>)) }</ul>*/}
    </div>
  );
}

export default App;
