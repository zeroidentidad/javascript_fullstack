import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Asistentes from './components/asistentes/Asistentes';
import MostrarAsistente from './components/asistentes/MostrarAsistente';
import EditarAsistente from './components/asistentes/EditarAsistente';
import NuevoAsistente from './components/asistentes/NuevoAsistente';
import NavBar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/asistentes" component={Asistentes}></Route>
          <Route exact path="/asistentes/nuevo" component={NuevoAsistente}></Route>
          <Route exact path="/asistentes/mostrar/:id" component={MostrarAsistente}></Route>
          <Route exact path="/asistentes/editar/:id" component={EditarAsistente}></Route>
        </Switch>
      </div>      
    </Router>
  );
}

export default App;
