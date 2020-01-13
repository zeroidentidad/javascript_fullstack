import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Productos from './components/Productos'
import Producto from './components/Producto'
import AgregarProducto from './components/AgregarProducto'
import EditarProducto from './components/EditarProducto'
import Header from './components/Header'

function App() {

  const [productos, guardarProductos] = useState([]);

  useEffect(() => {
      const consultarApi = async () => {
        // consultar la api de json-server local
        const resultado = await axios.get('http://localhost:4000/restaurant');

        guardarProductos(resultado.data);
      }
      consultarApi();

  }, []);  

  return (
    <Router>
      <Header />
      <main className="container mt-4">
      <Switch>
        <Route exact path="/nuevo-producto" component={AgregarProducto} />
          <Route exact path="/productos"
          render={() => (
            <Productos
              productos={productos}
            />
          )} />
        <Route exact path="/productos/:id" component={Producto} />
        <Route exact path="/productos/editar/:id" component={EditarProducto} />
      </Switch>
      </main>
    </Router>
  );
}

export default App;

/*
Pasar nada:
          <Route exact path="/productos" component={Productos} />

Pasar algo:
          <Route exact path="/productos"
          render={() => (
            <Productos
              productos={productos}
            />
          )} />
*/