import React, { Component } from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import Spinner from '../layout/BounceDelay/Spinner'
import PropTypes from 'prop-types'

class PrestamoLibro extends Component {

    // datos del form al state
    leerDato = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        // extraer libro
        const { libro } = this.props

        if (!libro) return <Spinner />

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                        <i className="fa fas-arrow-circle-left"></i>
                        Regresar a listado
                    </Link>
                </div>

                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i> Solicitar prestamo: {libro.titulo}
                    </h2>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-8">
                            <form >
                                <legend className="color-primary text-center">
                                    Buscar suscriptor por código
                                </legend>
                                <div className="form-group">
                                    <input 
                                    type="text"
                                    name="busqueda"
                                    className="form-control"
                                    onChange={this.leerDato}
                                    />
                                </div>
                                <input type="submit" className="btn btn-success" value="Buscar suscriptor"/>
                            </form>
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

PrestamoLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'libros',
            storeAs: 'libro',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(PrestamoLibro)