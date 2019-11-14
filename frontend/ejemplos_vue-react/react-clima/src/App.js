import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  // State princial
  // ciudad = state, guardarCiudad = this.setState()
  const [ ciudad, guardarCiudad ] = useState('');
  const [ pais, guardarPais] = useState('');
  const [ error, guardarError ] = useState(false);
  const [ resultado, guardarResultado] = useState({});

  useEffect(() => {

    // prevenir ejecución default state
    if(ciudad === '') return;

    const consultarAPI = async () => {
      const appId = '8a6c6897022371a3a79bad29fed4f323';
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`; 
  
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);

      guardarResultado(resultado);

    }

    consultarAPI();
  }, [ ciudad, pais ]);


  const datosConsulta = datos => {
      // Validar que campos estén
      if(datos.ciudad === '' || datos.pais === '') {
        guardarError(true);
        return;
      }

      // Ciudad y pais existen, agregar a state
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
  }
  
  // Cargar componente condicionalmente
  let componente;
  if(error) {
    // Hay error, mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios" />
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="La ciudad NO existe" />
  } else {
    // Mostrar el Clima
    componente = <Clima resultado={resultado} />
  }


  return (
    <div className="App">
        <Header titulo='ClimaApp'/>

        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                  <Formulario datosConsulta={datosConsulta} />
              </div>

              <div className="col s12 m6">
                  {componente}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;