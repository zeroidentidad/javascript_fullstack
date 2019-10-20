import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';

class Navbar extends Component {
    
    state = {
        usuarioAutenticado: false
    }

    // recibe props automaticamente
    static getDerivedStateFromProps(props, state) {
        const { auth } = props;

        if (auth.uid) {
            return { usuarioAutenticado: true }
        } else {
            return { usuarioAutenticado: false }
        }
    }

    // cerrar la sesión
    cerrarSesion = () => {
        const { firebase } = this.props;
        firebase.logout();
    }

    render() {

        const { usuarioAutenticado } = this.state;
        // extraer datos de autenticacion
        const { auth } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <nav className="nav navbar-light">
                    <span className="navbar-brand mb-0 h1">
                        <img src={logo} alt="Logo" height="48" width="96"/>
                    </span>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    {  usuarioAutenticado ? (
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/asistentes'} className="nav-link">
                                Asistentes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/ponentes'} className="nav-link">
                                Ponentes
                            </Link>
                        </li>
                    </ul>
                    ) : 
                    <ul className="navbar-nav mr-auto"> 
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                Lista Asistentes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/listaponentes'} className="nav-link">
                                Lista Ponentes
                            </Link>
                        </li>
                    </ul>
                    }
                    { usuarioAutenticado ? (
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#!" className="nav-link">
                            {auth.email}
                            </a>
                        </li>
                        <li className="nav-item">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.cerrarSesion}
                            >
                            Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                    ) : 
                   <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/admin'} className="nav-link">
                                <i className="fas fa-lock"></i> Admin
                            </Link>
                        </li>
                    </ul>                    
                    }          
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(Navbar);