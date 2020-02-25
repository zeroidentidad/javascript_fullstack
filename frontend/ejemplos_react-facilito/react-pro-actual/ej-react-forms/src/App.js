import React, { useState } from 'react';

const Form = () => {

  let [titulo, setTitulo] = useState('')
  let [cuerpo, setCuerpo] = useState('')

  return(
    <form >
      <div>
        <label htmlFor="titulo">Titulo </label>
        <input type="text" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>
      </div>  

      <div>
        <label htmlFor="cuerpo">Cuerpo </label>
        <textarea id="cuerpo" onChange={(e) => setCuerpo(e.target.value)}></textarea>
      </div>

        <input type="submit" value="Enviar"/>

        <p>Test: {titulo} {cuerpo}</p>
    </form>
  )
}

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
