// import dependencias React y de Routing
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// import layout compartido
import Layout from '../components/Layout';

// import paginas rutas
import SignUp from './signup';
import SignIn from './signin';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import NewNote from './new';
import EditNote from './edit';

import { useQuery, gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
{
isLoggedIn @client
}
`;

const Pages = () => {
    return (
        // definir rutas
        <Router>
            <Layout>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/mynotes" component={MyNotes} />
            <PrivateRoute path="/favorites" component={Favorites} />
            <PrivateRoute path="/new" component={NewNote} />
            <PrivateRoute path="/edit/:id" component={EditNote} />
            <Route path="/note/:id" component={NotePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            </Layout>
        </Router>
    );
};

// PrivateRoute component debajo de Pages component
const PrivateRoute = ({ component: Component, ...rest }) => {

    const { loading, error, data } = useQuery(IS_LOGGED_IN);

    // si data es loading, mostrar loading message
    if (loading) return <p>Cargando...</p>;

    // si error fetching data, mostrar error message
    if (error) return <p>Error!</p>;

    // si usuario esta registrado, rutear a componente solicitado
    // sino redirect a sign-in page
    return (
        <Route
            {...rest}
            render={props =>
                data.isLoggedIn === true ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/signin',
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
};

export default Pages;