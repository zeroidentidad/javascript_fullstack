import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'

class Navbar extends Component {

    state = {
        usuarioAutenticado: false
    }    

    // recibir props automaticamente
    static getDerivedStateFromProps(props, state) {
        const { auth } = props;

        if (auth.uid) {
            return { usuarioAutenticado: true }
        } else {
            return { usuarioAutenticado: false }
        }
    }

    cerrarSesion = () => {
        const {firebase} = this.props
        firebase.logout()
    }

    render(){
        
        const {usuarioAutenticado} = this.state

        // extraer datos de autenticacion
        const {auth} = this.props

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                <nav className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1">Admin </span>
                    <h2><i className="fas fa-university"></i></h2>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    {usuarioAutenticado ? (
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Libros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/suscriptores'} className="nav-link">Suscriptores</Link>
                        </li>
                    </ul>
                    ) : null }

                    {usuarioAutenticado ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#!" className="nav-link">{auth.email}</a>
                            </li>
                            <li className="nav-item">
                                <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={this.cerrarSesion}>Cerrar sesión</button>
                            </li>                            
                        </ul>
                    ) : null }
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