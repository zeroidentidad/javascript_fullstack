import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class EditarPonente extends Component {

    // refs
    nombreInput = React.createRef();
    apellidoInput = React.createRef();
    imagenInput = React.createRef();
    ponenciaInput = React.createRef();
    cupoInput = React.createRef();

    // Actualiza el ponente en firestore
    actualizarPonente = e => {
        e.preventDefault();

        // construir el nuevo objeto
        const ponenteActualizado = {
            nombre: this.nombreInput.current.value,
            apellido: this.apellidoInput.current.value,
            imagen: this.imagenInput.current.value,
            ponencia: this.ponenciaInput.current.value,
            cupo: this.cupoInput.current.value,
        }

        // leer firestore y history
        const { firestore, history, ponente } = this.props

        // actualizar en firestore
        firestore.update({
            collection: 'ponentes',
            doc: ponente.id
        }, ponenteActualizado).then(history.push('/ponentes'))
    }

    render() {

        // obtener el ponente
        const { ponente } = this.props;

        if (!ponente) return <Spinner />

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/ponentes'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Volver al Listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user"></i> Editar ponente
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.actualizarPonente} >
                                <div className="form-group">
                                    <label><b>Nombre:</b></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del ponente"
                                        required
                                        defaultValue={ponente.nombre}
                                        ref={this.nombreInput}
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
                                        defaultValue={ponente.apellido}
                                        ref={this.apellidoInput}
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
                                        defaultValue={ponente.imagen}
                                        ref={this.imagenInput}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Ponencia:</b></label>
                                    <input
                                        type="text"
                                        min="0"
                                        className="form-control"
                                        name="ponencia"
                                        placeholder="Tema o titulo de la ponencia"
                                        required
                                        defaultValue={ponente.ponencia}
                                        ref={this.ponenciaInput}
                                    />
                                </div>

                                <div className="form-group">
                                    <label><b>Cupo:</b></label>
                                    <input
                                        type="number"
                                        min="0"
                                        className="form-control"
                                        name="cupo"
                                        placeholder="Total cupo asistentes"
                                        required
                                        defaultValue={ponente.cupo}
                                        ref={this.cupoInput}
                                    />
                                </div>

                                <input type="submit" value="Editar" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditarPonente.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'ponentes',
            storeAs: 'ponente',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        ponente: ordered.ponente && ordered.ponente[0]
    }))
)(EditarPonente)