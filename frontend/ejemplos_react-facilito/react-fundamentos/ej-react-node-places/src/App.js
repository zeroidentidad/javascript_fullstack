import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="Places" />
      </header>
    </div>
  );
}

export default App;
