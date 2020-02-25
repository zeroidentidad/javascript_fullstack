import React, { useState } from 'react';
import { Surprise } from './components/Surprise';

function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  return (
    <div>
      <button onClick={() => setShowSurprise(!showSurprise)}>Mostrar sorpresa</button>
      {showSurprise&&<Surprise/>}
    </div>
  );
}

export default App;
