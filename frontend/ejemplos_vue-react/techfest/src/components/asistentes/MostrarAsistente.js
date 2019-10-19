import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const MostrarAsistente = ({ asistente }) => {
    if (!asistente) return <Spinner />

    return (
        <div className="row">
            <div className="col-md-6 mb-4">
                <Link to="/asistentes" className="btn btn-secondary">
                    <i className="fas fa-arrow-circle-left"></i> Regresar al listado
                </Link>
            </div>
            <div className="col-md-6">
                <Link to={`/asistentes/editar/${asistente.id}`} className="btn btn-primary float-right">
                    <i className="fas fa-pencil-alt"></i> Editar asistente
                </Link>
            </div>

            <hr className="mx-5 w-100" />

            <div className="col-12">
                <h2 className="mb-4">
                    {asistente.nombre} {asistente.apellido}
                </h2>

                <p>
                    <span className="font-weight-bold">
                        Profesión:
                    </span>{' '} 
                    {asistente.profesion}
                </p>
                <p>
                    <span className="font-weight-bold">
                        Matricula:
                    </span>{' '} 
                    {asistente.matricula}
                </p>
                <p>
                    <span className="font-weight-bold">
                        Nick redes sociales:
                    </span>{' '}
                    {asistente.nickname}
                </p>                
            </div>
        </div>
    );
}

MostrarAsistente.propTypes = {
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
)(MostrarAsistente)
