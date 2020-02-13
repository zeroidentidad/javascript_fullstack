import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import PropTypes from 'prop-types'

class NuevoSuscriptor extends Component {
    
    state = {
        nombre: '',
        apellido: '',
        carrera: '',
        codigo: ''
    }

    agregarSuscriptor = e => {
        e.preventDefault()

        // extraer valores del state
        const nuevoSuscriptor = {...this.state}

        // utilizar firestore de props
        const {firestore, history} = this.props

        // guardar en db
        firestore.add({ collection: 'suscriptores'}, nuevoSuscriptor
        .then(()=>(history.push('/suscriptores')))
        )

    }

    leerDato = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/suscriptores'} className="btn btn-secondary">
                        <i className="fa fas-arrow-circle-left"></i>
                        Regresar a listado
                    </Link>
                </div>

                <div className="col-12">
                    <h2>
                        <i className="fas fa-user-plus"></i> Nuevo Suscriptor
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-4">
                            <form onSubmit={this.agregarSuscriptor}>
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.nombre}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="Apellido suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.apellido}                                        
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Carrera:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="carrera"
                                        placeholder="Carrera suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.carrera}                                        
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Código:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="codigo"
                                        placeholder="Código suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.codigo}                                        
                                    />
                                </div>

                                <input
                                    type="submit"
                                    value="Agregar"
                                    className="btn btn-success"
                                />
                            </form>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

NuevoSuscriptor.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(NuevoSuscriptor)