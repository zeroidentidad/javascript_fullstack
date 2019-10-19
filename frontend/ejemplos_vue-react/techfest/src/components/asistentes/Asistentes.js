import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Asistentes = ({ asistentes, firestore}) => {

    if (!asistentes) return <Spinner/>;

    // Eliminar Asistentes
    const eliminarAsistente = id => {
        // eliminar
        firestore.delete({
            collection: 'asistentes',
            doc: id
        });//.then(() => history.push('/asistentes'));
    }    

    return (
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to={`/asistentes/nuevo`} className="btn btn-primary">
                    <i className="fas fa-plus"></i> Nuevo asistente
                </Link>
            </div>
            <div className="col-md-8">
                <i className="fas fa-users"></i> Asistentes
            </div>
            <table className="table table-striped mt-4">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Profesion</th>
                        <th>Matricula</th>
                        <th>Nick Redes</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {asistentes.map(asistente => (
                        <tr key={asistente.id}>
                            <td>{asistente.nombre} {asistente.apellido}</td>
                            <td>{asistente.profesion}</td>
                            <td>{asistente.matricula}</td>
                            <td>{asistente.nickname}</td>
                            <td>
                                <Link to={`/asistentes/mostrar/${asistente.id}`}
                                className="btn btn-success  btn-block"
                                >
                                    <i className="fas fa-angle-double-right"></i> Más info...
                                </Link>

                                <button
                                    type="button"
                                    className="btn btn-danger btn-block"
                                    onClick={() => eliminarAsistente(asistente.id)}
                                >
                                    <i className="fas fa-trash-alt"></i> Eliminar
                                </button>  
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Asistentes.propTypes = {
    firestore: PropTypes.object.isRequired,
    asistentes: PropTypes.array
}

export default compose(
    firestoreConnect([{collection: 'asistentes'}]),
    connect((state, props)=>({
        asistentes: state.firestore.ordered.asistentes
    }))
)(Asistentes)