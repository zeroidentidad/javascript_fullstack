import React from 'react';
import imagen from './assets/criptomonedas.png';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="cripto img" className="logotipo"/>
        </div>
      </div>
    </div>
  );
}

export default App;
