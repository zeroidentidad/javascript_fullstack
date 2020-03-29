// import dependencias React y de Routing
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import paginas rutas
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';

const Pages = () => {
    return (
        // definir rutas
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/mynotes" component={MyNotes} />
            <Route path="/favorites" component={Favorites} />
        </Router>
    );
};

export default Pages;