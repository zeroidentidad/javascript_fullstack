import React, { useState } from 'react';

const Button =()=>{
  const [count, setCount]= useState(0)
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
