import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Frase from './components/Frase';

function App() {

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await axios('https://warm-mesa-82751.herokuapp.com/api/quotes');

    //console.log(resultado.data);
    // agregar resultado de la API al state; (como this.setState)
    obtenerFrase(resultado.data);
  }

  // consulta a una rest api
  useEffect(
    () => {
      consultarAPI()
    }, []
  )

  return (
    <div className="contenedor">
      <Frase frase={frase} />
      <button onClick={consultarAPI} >Generar otra</button>
    </div>
  )
}

export default App;
