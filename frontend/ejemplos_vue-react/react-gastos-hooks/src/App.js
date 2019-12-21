import React from 'react';
import Pregunta from './components/Pregunta'

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Gastos</h1>
        <div className="contenido-principal contenido">
        <Pregunta />
        </div>
      </header>  
    </div>    
  );
}

export default App;
