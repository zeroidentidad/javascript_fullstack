import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const PonentesPublica = ({ ponentes, firestore }) => {

    if (!ponentes) return <Spinner />

    return (
        <div className="row">
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
                    </tr>
                </thead>

                <tbody>
                    {ponentes.map(ponente => (
                        <tr key={ponente.id}>
                            <td>{ponente.nombre} {ponente.apellido}</td>
                            <td><img src={ponente.imagen} alt="Ponente" height="150" width="150" /></td>
                            <td>{ponente.ponencia}</td>
                            <td>{ponente.cupo}</td>
                            <td>{ponente.cupo - (ponente.cupo+ponente.asignados.length)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

PonentesPublica.propTypes = {
    firestore: PropTypes.object.isRequired,
    ponentes: PropTypes.array
}

export default compose(
    firestoreConnect([{ collection: 'ponentes' }]),
    connect((state, props) => ({
        ponentes: state.firestore.ordered.ponentes
    }))
)(PonentesPublica);