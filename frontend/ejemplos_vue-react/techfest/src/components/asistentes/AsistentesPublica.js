import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';

const AsistentesPublica = ({asistentes}) => {

    if (!asistentes) return <Spinner/>;

    return (
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to={`/nuevo`} className="btn btn-primary">
                    <i className="fas fa-plus"></i> Nuevo asistente
                </Link>
            </div>
            <div className="col-md-8">
                <i className="fas fa-users"></i> Asistentes
            </div>
            <table className="table table-striped mt-4 table-bordered">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Profesion</th>
                        <th>Matricula</th>
                        <th>Nick Redes</th>
                    </tr>
                </thead>
                <tbody>
                    {asistentes.map(asistente => (
                        <tr key={asistente.id}>
                            <td>{asistente.nombre} {asistente.apellido}</td>
                            <td>{asistente.profesion}</td>
                            <td>{asistente.matricula}</td>
                            <td>{asistente.nickname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default compose(
    firestoreConnect([{collection: 'asistentes'}]),
    connect((state, props)=>({
        asistentes: state.firestore.ordered.asistentes
    }))
)(AsistentesPublica)