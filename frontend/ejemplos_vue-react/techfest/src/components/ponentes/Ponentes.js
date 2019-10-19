import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';


const Ponentes = ({ ponentes, firestore }) => {

    const eliminarPonente = id => {
        // eliminar ponente de Firestore
        firestore.delete({
            collection: 'ponentes',
            doc: id
        });

    }

    if (!ponentes) return <Spinner />


    return (
        <div className="row">
            <div className="col-12 mb-4">
                <Link to="/ponentes/nuevo" className="btn btn-success">
                    <i className="fas fa-plus"></i> Nuevo
                </Link>
            </div>
            <div className="col-md-8">
                    <i className="fas fa-users"></i> Ponentes
            </div>

            <table className="table table-striped mt-4 table-bordered">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ponencia</th>
                        <th>Cupo</th>
                        <th>Asignados</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {ponentes.map(ponente => (
                        <tr key={ponente.id}>
                            <td>{ponente.nombre} {ponente.apellido}</td>
                            <td><img src={ponente.imagen} alt="Ponente" height="150" width="150" /></td>
                            <td>{ponente.ponencia}</td>
                            <td>{ponente.cupo}</td>
                            <td>{ponente.cupo - (ponente.cupo + ponente.asignados.length)}</td>
                            <td>
                                <Link
                                    to={`/ponentes/mostrar/${ponente.id}`}
                                    className="btn btn-success btn-block"
                                >
                                    <i className="fas fa-angle-double-right"></i> Más info...
                                </Link>

                                <button
                                    type="button"
                                    className="btn btn-danger btn-block"
                                    onClick={() => eliminarPonente(ponente.id)}
                                >
                                    <i className="fas fa-trash-alt"></i> Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

Ponentes.propTypes = {
    firestore: PropTypes.object.isRequired,
    ponentes: PropTypes.array
}

export default compose(
    firestoreConnect([{ collection: 'ponentes' }]),
    connect((state, props) => ({
        ponentes: state.firestore.ordered.ponentes
    }))
)(Ponentes);