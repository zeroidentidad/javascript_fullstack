import React, { useState, useEffect } from 'react';

const Saludo =()=>{
  const [nombre, setNombre]=useState('')
  return (
    <div>
      {/* SyntheticEvent */}
      <input type="text" onChange={(e)=>setNombre(e.target.value)} />
      <p>Hola {nombre}</p>
    </div>
  );
}

function App() {
  return (
    <Saludo />
  );
}

export default App;
