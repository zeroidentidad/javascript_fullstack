import React, { Component } from 'react';
//import Router from './componentes/Router';
import { makeMainRoutes }  from './componentes/routes';

const routes = makeMainRoutes();

class App extends Component {
  render() {
    return (
        <React.Fragment>
          {
            /*<Router />*/
            routes
          }
        </React.Fragment>
    )
  }
}

export default App;
