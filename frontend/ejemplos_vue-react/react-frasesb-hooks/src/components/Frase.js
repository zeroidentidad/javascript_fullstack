import React from 'react';

function Frase({frase}) {
  return (
    <div className="frase">
      <h2><u>{frase.anime}</u></h2>
      <h1>{frase.quo}</h1>
      <p>- <b>{frase.character}</b></p>
    </div>
  )
}

export default Frase;