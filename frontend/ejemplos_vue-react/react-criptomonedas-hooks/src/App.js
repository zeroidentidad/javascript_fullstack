import React, { useState, useEffect }  from 'react';
import imagen from './assets/criptomonedas.png';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import PacmanLoader from 'react-spinners/PacmanLoader';

const override = `
  display: block;
  margin: 0 38%;
  text-align: center;
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [cargando, guardarCargando] = useState(false);
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {

      // sin moneda, no ejecutar
      if (moneda === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      // mostrar spinner
      guardarCargando(true);

      // ocultar spinner y agregar el resultado
      setTimeout(() => {
        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 2500);

    }

    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  // Mostrar Spinner o resultado
  const componenteSpin = (cargando) ? <PacmanLoader css={override} /> : <Cotizacion resultado={resultado} />

  return (
    <div className="container padding-x">
      <div className="row">

        <div className="one-half column">
          <h1>Top criptomonedas</h1>
          <Formulario
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />
        </div>

        <div className="one-half column">
          <div className="padding-x">
          <img src={imagen} height="150" width="134" alt="imagen criptomonedas" />              
          </div>
          {componenteSpin}  
        </div>  

      </div>
    </div>
  );
}

export default App;
