import React, { useState, useEffect } from 'react';
import { Surprise } from './components/Surprise';
//import hello from './functions/hello'

function App() {
  const [showSurprise, setShowSurprise] = useState(false)

  /*useEffect(() => {
    import('./functions/hello').then(func => func.default())
  }, [])*/

  return (
    <div>
      <button onClick={() => setShowSurprise(!showSurprise)}>Mostrar sorpresa</button>
      {showSurprise&&<Surprise/>}
    </div>
  );
}

export default App;
