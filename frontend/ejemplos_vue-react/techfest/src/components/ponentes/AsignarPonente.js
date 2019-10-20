import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

import TarjetaAsistente from '../asistentes/TarjetaAsistente';

// REDUX Actions
import { buscarAsistencia } from '../../actions/buscarAsistenciaActions';

class AsignarPonente extends Component {
    
    state = {
        noResultados: false,
        busqueda: ''
    }

    // Buscar asistente por matricula
    buscarAsistente = e => {
        e.preventDefault();

        // obtener el valor a buscar
        const { busqueda } = this.state;

        // extraer firestore
        const { firestore, buscarAsistencia } = this.props;

        // hacer la consulta
        const coleccion = firestore.collection('asistentes');
        const consulta = coleccion.where("matricula", "==", busqueda).get();

        // leer los resultados
        consulta.then(resultado => {
            if (resultado.empty) {
                // no hay resultados

                // almacenar en redux objeto vacio
                buscarAsistencia({})

                // actualizar el state en base a si hay resultados
                this.setState({
                    noResultados: true
                });
            } else {
                // si hay resultados

                // colocar el resultado en el state de Redux
                const datos = resultado.docs[0];
                buscarAsistencia(datos.data());

                // actualizar el state en base a si hay resultados
                this.setState({
                    noResultados: false,
                })
            }
        })
    }

    // almacena datos del asistente para asignar ponente
    asignarPonente = () => {
        const { asistencia } = this.props;

        // fecha de alta
        //options = { year: "numeric", month: "numeric", day: "numeric" };
        let options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12: "false" }
        asistencia.fecha_asignacion = new Date().toLocaleDateString('es-ES', options);

        // No se pueden mutar los pros, tomar una copia y crear un arreglo nuevo
        let asignados = [];
        asignados = [...this.props.ponente.asignados, asistencia];

        // Copiar el objeto y agregar los asignados
        const ponente = { ...this.props.ponente };

        // eliminar los asignados anteriores
        delete ponente.asignados;

        // asignar el asistente
        ponente.asignados = asignados;

        // extraer firestore
        const { firestore, history } = this.props;

        // almacenar en la BD
        firestore.update({
            collection: 'ponentes',
            doc: ponente.id
        }, ponente).then(history.push(`/ponentes/mostrar/${ponente.id}`));
    }


    // Almacenar matricula en el state
    leerDato = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // Extaer el ponente
        const { ponente } = this.props;

        // mostrar el spinner
        if (!ponente) return <Spinner />

        // extraer los datos del asistente
        const { asistencia } = this.props;

        let tarjetaAsistente, btnAsignar;
        if (asistencia.nombre) {
            tarjetaAsistente = <TarjetaAsistente asistente={asistencia} />
            btnAsignar = <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.asignarPonente}
            >Agregar asistente</button>
        } else {
            tarjetaAsistente = null;
            btnAsignar = null;
        }

        // Mostrar mensaje de error
        const { noResultados } = this.state;

        let mensajeResultado = '';
        if (noResultados) {
            mensajeResultado = <div className="alert alert-secondary text-center font-weight-bold">No hay resultados para matricula.</div>
        } else {
            mensajeResultado = null;
        }

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/ponentes'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Volver a listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i> Asignar asistencia: {ponente.nombre} {ponente.apellido}
                    </h2>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8">
                            <form onSubmit={this.buscarAsistente} className="mb-4">
                                <legend className="color-primary text-center">
                                    Busca al asistente por matricula
                                </legend>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="busqueda"
                                        className="form-control"
                                        onChange={this.leerDato}
                                    />
                                </div>
                                <input value="Buscar asistente" type="submit" className="btn btn-success btn-block" />
                            </form>

                            {/* Muestra datos del asistente y el botón para asignar ponente */}
                            {tarjetaAsistente}
                            {btnAsignar}

                            {/* Muestra un mensaje de no resultados */}
                            {mensajeResultado}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AsignarPonente.propTypes = {
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
    connect(({ firestore: { ordered }, asistencia }, props) => ({
        ponente: ordered.ponente && ordered.ponente[0],
        asistencia: asistencia
    }), { buscarAsistencia })
)(AsignarPonente)