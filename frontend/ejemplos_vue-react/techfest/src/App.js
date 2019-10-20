import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from'./store';
import {Provider} from 'react-redux';

import NavBar from './components/layout/Navbar';

import Asistentes from './components/asistentes/Asistentes';
import MostrarAsistente from './components/asistentes/MostrarAsistente';
import EditarAsistente from './components/asistentes/EditarAsistente';
import NuevoAsistente from './components/asistentes/NuevoAsistente';
import AsistentesPublica from './components/asistentes/AsistentesPublica';
import NuevoAsistentePublica from './components/asistentes/NuevoAsistentePublica';

import Ponentes from './components/ponentes/Ponentes';
import EditarPonente from './components/ponentes/EditarPonente';
import MostrarPonente from './components/ponentes/MostrarPonente';
import NuevoPonente from './components/ponentes/NuevoPonente';
import AsignarPonente from './components/ponentes/AsignarPonente';
import PonentesPublica from './components/ponentes/PonentesPublica';

import Login from './components/auth/Login';

import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={UserIsNotAuthenticated(AsistentesPublica)}></Route>
            <Route exact path="/nuevo" component={UserIsNotAuthenticated(NuevoAsistentePublica)}></Route>            
            <Route exact path="/asistentes" component={UserIsAuthenticated(Asistentes)}></Route>
            <Route exact path="/asistentes/nuevo" component={UserIsAuthenticated(NuevoAsistente)}></Route>
            <Route exact path="/asistentes/mostrar/:id" component={UserIsAuthenticated(MostrarAsistente)}></Route>
            <Route exact path="/asistentes/editar/:id" component={UserIsAuthenticated(EditarAsistente)}></Route>
            
            <Route exact path="/listaponentes" component={UserIsNotAuthenticated(PonentesPublica)}></Route>
            <Route exact path="/ponentes" component={UserIsAuthenticated(Ponentes)}></Route>
            <Route exact path="/ponentes/nuevo" component={UserIsAuthenticated(NuevoPonente)}></Route>
            <Route exact path="/ponentes/mostrar/:id" component={UserIsAuthenticated(MostrarPonente)}></Route>
            <Route exact path="/ponentes/editar/:id" component={UserIsAuthenticated(EditarPonente)}></Route>
            <Route exact path="/ponentes/asignar/:id" component={UserIsAuthenticated(AsignarPonente)}></Route>

            <Route exact path="/admin" component={UserIsNotAuthenticated(Login)}></Route>
          </Switch>
        </div>
      </Router>      
    </Provider>
  );
}

export default App;
