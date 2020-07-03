import React from 'react';
import './App.css';
import Botonera from "./component/botonera/Botonera";

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/:section' component={Botonera} />
      </Router>
    </div>
  );
}

export default App;
