import React, { useState, useEffect } from 'react';

const Button =()=>{

  const [count, setCount]= useState(0)

  useEffect(() => {
    if (count>0) {
      alert('sumando prro')
    }
    return()=>{
      console.log("Adios")
    }
  }, [count])

  return (
    <div>
      <p>Presionado: {count}</p>
      <button onClick={() => setCount(count+1)}>Click me!</button>
    </div>
  );
}

function App() {
  return (
    <Button />
  );
}

export default App;
