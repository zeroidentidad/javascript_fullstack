import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class EditarAsistente extends Component {

    // crear los refs
    nombreInput = React.createRef();
    apellidoInput = React.createRef();
    profesionInput = React.createRef();
    matriculaInput = React.createRef();
    nicknameInput = React.createRef();

    // Edita el asistente en la base de datos
    editarAsistente = e => {
        e.preventDefault();

        // crear el objeto que va a actualizar
        const asistenteActualizado = {
            nombre: this.nombreInput.current.value,
            apellido: this.apellidoInput.current.value,
            profesion: this.profesionInput.current.value,
            matricula: this.matriculaInput.current.value,
            nickname: this.nicknameInput.current.value,
        }
        // extraer firestore, e history de props
        const { asistente, firestore, history } = this.props;

        // almacenar en base de datos con firestore
        firestore.update({
            collection: 'asistentes',
            doc: asistente.id
        }, asistenteActualizado).then(history.push('/asistentes'));

    }

    render() {

        const { asistente } = this.props;

        if (!asistente) return <Spinner />

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/asistentes'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Regresar al listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user"></i> Editar asistente
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.editarAsistente} >
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del asistente"
                                        required
                                        ref={this.nombreInput}
                                        defaultValue={asistente.nombre}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="Apellido del asistente"
                                        required
                                        ref={this.apellidoInput}
                                        defaultValue={asistente.apellido}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Profesion:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="profesion"
                                        placeholder="Profesion del asistente"
                                        required
                                        ref={this.profesionInput}
                                        defaultValue={asistente.profesion}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Matricula:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="matricula"
                                        placeholder="Matricula del asistente"
                                        required
                                        ref={this.matriculaInput}
                                        defaultValue={asistente.matricula}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Nickname:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nickname"
                                        placeholder="Nickname del asistente"
                                        required
                                        ref={this.nicknameInput}
                                        defaultValue={asistente.nickname}
                                    />
                                </div>                                

                                <input
                                    type="submit"
                                    value="Editar"
                                    className="btn btn-success"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditarAsistente.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'asistentes',
            storeAs: 'asistente',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        asistente: ordered.asistente && ordered.asistente[0]
    }))
)(EditarAsistente)