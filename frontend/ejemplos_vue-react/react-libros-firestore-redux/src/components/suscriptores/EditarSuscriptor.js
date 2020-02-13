import React, {Component} from 'react';
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import Spinner from '../layout/BounceDelay/Spinner'
import PropTypes from 'prop-types'

class EditarSuscriptor extends Component {
    
    // react Refs
    nombreInput = React.createRef();
    apellidoInput = React.createRef();
    carreraInput = React.createRef();
    codigoInput = React.createRef();

    // editar en bd
    editarSuscriptor = e =>{
        e.preventDefault()

        // crear obj a actualizar
        const suscriptorActualizado = {
            nombre: this.nombreInput.current.value,
            apellido: this.apellidoInput.current.value,
            carrera: this.carreraInput.current.value,
            codigo: this.codigoInput.current.value,
        }

        // extraer firestore, history de props 
        const {suscriptor, firestore, history} = this.props;

        // almacenar en bd con firestore
        firestore.update({
            collection: 'suscriptores',
            doc: suscriptor.id
        }, suscriptorActualizado).then(history.push('/suscriptores'))
    }

    render(){
        
        const { suscriptor } = this.props

        if (!suscriptor) return <Spinner />

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/suscriptores'} className="btn btn-secondary">
                        <i className="fa fas-arrow-circle-left"></i>
                        Regresar a listado
                    </Link>
                </div>

                <div className="col-12">
                    <h2>
                        <i className="fas fa-user"></i> Editar Suscriptor
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-4">
                            <form onSubmit={this.editarSuscriptor}>
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre suscriptor"
                                        required
                                        ref={this.nombreInput}
                                        defaultValue={suscriptor.nombre}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="Apellido suscriptor"
                                        required
                                        ref={this.apellidoInput}
                                        defaultValue={suscriptor.apellido}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Carrera:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="carrera"
                                        placeholder="Carrera suscriptor"
                                        required
                                        ref={this.carreraInput}
                                        defaultValue={suscriptor.carrera}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Código:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="codigo"
                                        placeholder="Código suscriptor"
                                        required
                                        ref={this.codigoInput}
                                        defaultValue={suscriptor.codigo}
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

EditarSuscriptor.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'suscriptores',
            storeAs: 'suscriptor',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(EditarSuscriptor)