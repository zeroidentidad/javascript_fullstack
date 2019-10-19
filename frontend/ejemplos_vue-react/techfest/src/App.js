import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/layout/Navbar';
import store from'./store';
import {Provider} from 'react-redux';
import Asistentes from './components/asistentes/Asistentes';
import MostrarAsistente from './components/asistentes/MostrarAsistente';
import EditarAsistente from './components/asistentes/EditarAsistente';
import NuevoAsistente from './components/asistentes/NuevoAsistente';
import AsistentesPublica from './components/asistentes/AsistentesPublica';
import NuevoAsistentePublica from './components/asistentes/NuevoAsistentePublica';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={AsistentesPublica}></Route>
            <Route exact path="/nuevo" component={NuevoAsistentePublica}></Route>            
            <Route exact path="/asistentes" component={Asistentes}></Route>
            <Route exact path="/asistentes/nuevo" component={NuevoAsistente}></Route>
            <Route exact path="/asistentes/mostrar/:id" component={MostrarAsistente}></Route>
            <Route exact path="/asistentes/editar/:id" component={EditarAsistente}></Route>
          </Switch>
        </div>
      </Router>      
    </Provider>
  );
}

export default App;
