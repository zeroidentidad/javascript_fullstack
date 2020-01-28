import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux'
import store from './store'

// Componentes
import Header from './components/Header';
import Publicaciones from './components/Publicaciones';
import NuevaPublicacion from './components/NuevaPublicacion';
import EditarPublicacion from './components/EditarPublicacion';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Publicaciones} />
            <Route exact path="/publicaciones/nueva" component={NuevaPublicacion} />
            <Route exact path="/publicaciones/editar/:id" component={EditarPublicacion} />
          </Switch>
        </div>
    </Provider>
    </Router>
  );
}

export default App;
