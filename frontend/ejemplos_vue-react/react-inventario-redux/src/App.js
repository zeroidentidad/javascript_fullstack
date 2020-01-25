import React from 'react';
import AgregarArticulo from './components/AgregarArticulo';
import ListadoArticulos from './components/ListadoArticulos';
// uso Redux
import store from './store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <header>
        <h1 className="text-center">Inventario personal</h1>
      </header>
      <div className="row mt-1">
        <div className="col-md-6">
            <AgregarArticulo />
        </div>
        <div className="col-md-6">
            <ListadoArticulos />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
