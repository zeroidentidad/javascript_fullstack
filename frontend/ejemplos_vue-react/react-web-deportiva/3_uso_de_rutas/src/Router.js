import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario';
import NotFound from './components/common/not-found/NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/liga' component={Liga} />
            <Route path='/calendario/:equipo' component={Calendario} />
            <Route path='/calendarios' component={Calendario} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;