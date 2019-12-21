import React, {useState} from 'react';
import Pregunta from './components/Pregunta'

function App() {

  // los states
  const [presupuesto, guardarPresupuesto] = useState(0);

  return (
    <div className="App container">
      <header>
        <h1>Gastos</h1>
        <div className="contenido-principal contenido">
        <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
        />
        </div>
      </header>  
    </div>    
  );
}

export default App;
