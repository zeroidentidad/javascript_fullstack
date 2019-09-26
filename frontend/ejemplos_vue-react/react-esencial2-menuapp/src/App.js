import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Dish, * as D from './components/Dish';

function App() {
  return (
    <div className="App">
      <Header />
      <Dish />
      <D.Flag />
    </div>
  );
}

export default App;
