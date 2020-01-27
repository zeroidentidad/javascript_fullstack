import React from 'react';
import { Browser as Router, Route, Switch} from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import store from './store'

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
