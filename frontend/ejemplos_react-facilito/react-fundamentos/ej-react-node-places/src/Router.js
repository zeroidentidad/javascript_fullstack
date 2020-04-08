import React from 'react';
import { BrowserRouter as ReactRouter, Route } from 'react-router-dom';
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'

export default class Router extends React.Component {
    render(){
        return(
        <ReactRouter>
            <App>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Login} />
            </App>
        </ReactRouter>
        )
    }
}