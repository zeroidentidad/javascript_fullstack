import React, { useState, useEffect, Suspense } from 'react';
//import { Surprise } from './components/Surprise';
//import hello from './functions/hello'

const Surprise = React.lazy(()=>import('./components/Surprise'))

function App() {
  const [showSurprise, setShowSurprise] = useState(false)

  /*useEffect(() => {
    import('./functions/hello').then(func => func.default())
  }, [])*/

  return (
    <div>
      <button onClick={() => setShowSurprise(!showSurprise)}>Mostrar sorpresa</button>
      {showSurprise && <Suspense fallback={<p>Cargando prro...</p>}><Surprise /></Suspense>}
    </div>
  );
}

export default App;
