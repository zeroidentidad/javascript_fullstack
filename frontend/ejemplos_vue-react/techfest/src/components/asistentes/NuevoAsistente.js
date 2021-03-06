import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class NuevoAsistente extends Component {

    state = {
        nombre: '',
        apellido: '',
        profesion: '',
        matricula: '',
        nickname: ''
    }

    // extrae valores del input y los coloca en el state
    leerDato = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    
    // Agrega un nuevo asistente base de datos
    agregarAsistente = e => {
        e.preventDefault();

        // extraer los valores del state
        const nuevoAsistente = this.state;

        // extraer firestore e historial rutas de props
        const { firestore, history } = this.props

        //Guardarlo en la base de datos
        firestore.add({ collection: 'asistentes' }, nuevoAsistente).then(() => history.push('/asistentes'));
    }    

    render() {
        return (
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to="/asistentes" className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left"></i> Regresar al listado
                </Link>
            </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user-plus"></i> Nuevo asistente
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.agregarAsistente}>
                                <div className="form-group">
                                    <label><b>Nombre:</b></label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Tu nombre"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.nombre}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Apellido:</b></label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="Tu apellido"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.apellido}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Profesión:</b></label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="profesion"
                                        placeholder="Tu profesión"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.profesion}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Matricula:</b></label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="matricula"
                                        placeholder="Tu matricula"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.matricula}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Nickname:</b></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nickname"
                                        placeholder="Tu nick en redes sociales"
                                        required
                                        onChange={this.leerDato}
                                        value={this.state.nickname}
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

NuevoAsistente.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(NuevoAsistente);