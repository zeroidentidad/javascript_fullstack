import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {connect} from "react-redux";
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Place from './pages/Place';
import { ConnectedRouter } from "react-router-redux";

class Router extends React.Component {

    signedinRoutes(){
        if (this.props.user.jwt){
            return(
                <Route path="/new"  render={()=><h1>kepedo</h1>}/>
            )
        }
    }

    home(){
        if (this.props.user.jwt) return Dashboard
        return Home
    }

    render(){
        return(
        <ConnectedRouter history={this.props.history}>
            <App>
                <Switch>
                <Route exact path="/" component={this.home()} />
                <Route exact path="/lugares/:slug" component={Place} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Login} />
                {this.signedinRoutes()}
                </Switch>
            </App>
        </ConnectedRouter>
        )
    }
}

const mapStateToProps=(state, props) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Router)