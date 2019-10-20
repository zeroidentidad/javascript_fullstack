import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class MostrarPonente extends Component {

    liberarCupo = id => {
        // extraer firestore
        const { firestore } = this.props;

        // copia del ponente
        const ponenteActualizado = { ...this.props.ponente };

        // eliminar persona que esta realizando liberacion de cupo
        const asignados = ponenteActualizado.asignados.filter(elemento => elemento.matricula !== id);
        ponenteActualizado.asignados = asignados;

        // actualizar en firestore
        firestore.update({
            collection: 'ponentes',
            doc: ponenteActualizado.id
        }, ponenteActualizado);
    }

    render() {
        
        // extraer el ponente
        const { ponente } = this.props;

        if (!ponente) return <Spinner />;

        // boton para asignar ponente
        let btnAsignacion;

        if (ponente.cupo - ponente.asignados.length > 0) {
            btnAsignacion = <Link to={`/ponentes/asignar/${ponente.id}`} 
            className="btn btn-success my-3" >Asignar asistencia</Link>
        } else {
            btnAsignacion = null;
        }

        return (
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Link to="/ponentes" className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Volver a listado
                    </Link>
                </div>
                <div className="col-md-6 mb-4">
                    <Link to={`/ponentes/editar/${ponente.id}`} className="btn btn-primary float-right">
                        <i className="fas fa-pencil-alt"></i> Editar
                    </Link>
                </div>

                <hr className="mx-5 w-100" />

                <div className="col-12">
                    <h2 className="mb-4">{ponente.nombre}</h2>

                    <p>
                        <span className="font-weight-bold">
                            Nombre:
                        </span> {''}
                        {ponente.nombre} {ponente.apellido}
                    </p>

                    <p>
                        <span className="font-weight-bold">
                            Imagen:
                        </span> {''}
                        <img src={ponente.imagen} alt="Ponente" height="150" width="150" />
                    </p>

                    <p>
                        <span className="font-weight-bold">
                            Ponencia:
                        </span> {''}
                        {ponente.ponencia}
                    </p>

                    <p>
                        <span className="font-weight-bold">
                            Cupo total:
                        </span> {''}
                        {ponente.cupo}
                    </p>                    

                    <p>
                        <span className="font-weight-bold">
                            Cupo disponible:
                        </span> {''}
                        {ponente.cupo - ponente.asignados.length}
                    </p>

                    {/* Boton para solicitar un prestamo de ponente */}
                    {btnAsignacion}

                    {/* Muestra los asistentes que tienen los ponentes */}

                    <h3 className="my-2">Asistentes que tienen el ponente asignado</h3>

                    {ponente.asignados.map(asignado => (
                        <div key={asignado.matricula} className="card my-2">
                            <h4 className="card-header">
                                {asignado.nombre} {asignado.apellido}
                            </h4>

                            <div className="card-body">
                                <p>
                                    <span className="font-weight-bold">
                                        Matricula:
                                    </span> {''}
                                    {asignado.matricula}
                                </p>

                                <p>
                                    <span className="font-weight-bold">
                                        Profesión:
                                    </span> {''}
                                    {asignado.profesion}
                                </p>

                                <p>
                                    <span className="font-weight-bold">
                                        Nickname:
                                    </span> {''}
                                    {asignado.nickname}
                                </p>

                                <p>
                                    <span className="font-weight-bold">
                                        Fecha:
                                    </span> {''}
                                    {asignado.fecha_asignacion}
                                </p>
                            </div>

                            <div className="card-footer">
                                <button
                                    type="button"
                                    className="btn btn-success font-weight-bold"
                                    onClick={() => this.liberarCupo(asignado.matricula)}
                                > Liberar cupo</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

MostrarPonente.propTypes = {
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
)(MostrarPonente)