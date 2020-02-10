import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// componentes
import Navbar from './components/layout/Navbar'
import Suscriptores from './components/suscriptores/Suscriptores'
import NuevoSuscriptor from './components/suscriptores/NuevoSuscriptor'
import MostrarSuscriptor from './components/suscriptores/MostrarSuscriptor'
import EditarSuscriptor from './components/suscriptores/EditarSuscriptor'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/suscriptores" component={Suscriptores} />
          <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor} />
          <Route exact path="/suscriptores/mostrar/:id" component={MostrarSuscriptor} />
          <Route exact path="/suscriptores/editar/:id" component={EditarSuscriptor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
