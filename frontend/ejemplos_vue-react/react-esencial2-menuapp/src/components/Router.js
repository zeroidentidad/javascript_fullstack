import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Dishes from './Dishes';
import Dish from './Dish';
import Countries from './Countries';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/platillos" component={Dishes} />
        <Route path="/platillo/:nombre" component={Dish} />
        <Route path="/paises" component={Countries} />
        <Route component={NotFound} /> {/*ruta dafult*/}
    </Switch>
    </BrowserRouter> 
)

export default Router;