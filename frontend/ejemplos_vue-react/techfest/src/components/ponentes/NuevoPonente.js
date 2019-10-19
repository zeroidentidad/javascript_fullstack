import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class NuevoPonente extends Component {
    
    state = {
        nombre: '',
        apellido: '',
        imagen: '',
        ponencia: '',
        cupo: '',
        asignados: ''
    }

    // guardar el ponente en base de datos
    agregarPonente = e => {
        e.preventDefault();

        // tomar copia del state
        const nuevoPonente = this.state;

        // agregar un arreglo asignados por default.
        nuevoPonente.asignados = [];

        // extraer firestore con sus métodos
        const { firestore, history } = this.props;

        // añadirlo a base de datos y redireccionar
        firestore.add({ collection: 'ponentes' }, nuevoPonente)
            .then(() => history.push('/ponentes'))
    }

    // almacena lo que el usuario escribe en el state
    leerDato = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to="/ponentes" className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Volver al listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user"></i> Nuevo ponente
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.agregarPonente} >
                                <div className="form-group">
                                    <label><b>Nombre:</b></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del ponente"
                                        required
                                        value={this.state.nombre}
                                        onChange={this.leerDato}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Apellido:</b></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="Apellido del ponente"
                                        required
                                        value={this.state.apellido}
                                        onChange={this.leerDato}
                                    />
                                </div>                                

                                <div className="form-group">
                                    <label><b>Imagen:</b></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="imagen"
                                        placeholder="URL (imagen, foto) de ponente o ponencia"
                                        required
                                        value={this.state.imagen}
                                        onChange={this.leerDato}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Ponencia:</b></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="ponencia"
                                        placeholder="Tema o titulo de la ponencia"
                                        required
                                        value={this.state.ponencia}
                                        onChange={this.leerDato}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Cupo:</b></label>
                                    <input
                                        type="number"
                                        min="0"
                                        className="form-control"
                                        name="cupo"
                                        placeholder="Cantidad cupo asistentes"
                                        required
                                        value={this.state.cupo}
                                        onChange={this.leerDato}
                                    />
                                </div>

                                <input type="submit" value="Agregar" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

NuevoPonente.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(NuevoPonente);