import React from 'react';
// uso Redux
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <header>
        <h1 className="text-center">Inventario personal (web localStorage)</h1>
      </header>
      <div className="row mt-2">
        <div className="col-md-6">
          Formulario
        </div>
        <div className="col-md-6">
          Listado
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
