import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Productos from './components/Productos'
import Producto from './components/Producto'
import AgregarProducto from './components/AgregarProducto'
import EditarProducto from './components/EditarProducto'
import Header from './components/Header'

// init dbjson: json-server db.json -p 4000

function App() {

  const [productos, guardarProductos] = useState([]);
  const [recargarProductos, guardarRecargarProductos] = useState(true);

  useEffect(() => {
    if (recargarProductos) {
      const consultarApi = async () => {
        // consultar la api de json-server local
        const resultado = await axios.get('http://localhost:4000/restaurant');

        guardarProductos(resultado.data);
      }
      consultarApi();

      // Cambiar a false la recarga de los productos
      guardarRecargarProductos(false);      
    }
  }, [recargarProductos]);  

  return (
    <Router>
      <Header />
      <main className="container mt-4">
      <Switch>
        <Route exact path="/nuevo-producto" 
            render={() => (
              <AgregarProducto
                guardarRecargarProductos={guardarRecargarProductos}
              />
            )}/>
          <Route exact path="/productos"
          render={() => (
            <Productos
              productos={productos}
            />
          )} />
        <Route exact path="/productos/:id" component={Producto} />
        <Route exact path="/productos/editar/:id"
            render={props => {
              // tomar el ID del producto
              const idProducto = parseInt(props.match.params.id);

              // el producto que se pasa al state
              const producto = productos.filter(producto => producto.id === idProducto);

              return (
                <EditarProducto
                  producto={producto[0]}
                  guardarRecargarProductos={guardarRecargarProductos}
                />
              )
            }}/>
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