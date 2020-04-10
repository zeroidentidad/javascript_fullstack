import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';

const userSignedIn = true;

export default class Router extends React.Component {

    signedinRoutes(){
        if (userSignedIn){
            return(
                <Route path="/new"  render={()=><h1>kepedo</h1>}/>
            )
        }
    }

    home(){
        if (userSignedIn) return Dashboard
        return Home
    }

    render(){
        return(
        <ReactRouter>
            <App>
                <Switch>
                <Route exact path="/" component={this.home()} />
                <Route exact path="/lugares/:slug" component={Place} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Login} />
                {this.signedinRoutes()}
                </Switch>
            </App>
        </ReactRouter>
        )
    }
}