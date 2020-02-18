import React, { Component } from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import Spinner from '../layout/BounceDelay/Spinner'
import PropTypes from 'prop-types'
import FichaSuscriptor from '../suscriptores/FichaSuscriptor'

// redux actions
import {buscarUsuario} from '../../redux/actions/buscarUsuarioActions'

class PrestamoLibro extends Component {

    state = {
        busqueda: '',
        //resultado: {},
        noResultados: false
    }

    // datos del form al state
    leerDato = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //busqueda suscriptor
    buscarSuscriptor = e => {
        e.preventDefault()

        // obtener valor a buscar
        const {busqueda} = this.state

        // extraer de firestore y actions
        const {firestore, buscarUsuario} = this.props

        // hacer consulta
        const suscriptores = firestore.collection('suscriptores')
        const consulta = suscriptores.where('codigo', '==', busqueda).get()

        // leer resultados
        consulta.then(resultado => {
            if(resultado.empty) {
                // almacenar en redux
                buscarUsuario({})                
                // no hay resultados
                this.setState({ /*resultado: {},*/ noResultados: true })
            } else {
                const datos = resultado.docs[0]
                // colocar en state de redux
                buscarUsuario(datos.data())
                // si hay resultados
                this.setState({ /*resultado: datos.data(),*/ noResultados: false })
            }
        })
    }


    // almacenar datos del suscriptor para solicitar libro
    solicitarPrestamo = () => {
        const suscriptor = this.state.resultado

        // fecha alta
        suscriptor.fecha_solicitud = new Date().toLocaleDateString()

        // obtener libro
        //let libroActualizado = {...this.props.libro}
        let libroActualizado = JSON.parse(JSON.stringify(this.props.libro));

        // agregar suscriptor al libro
        libroActualizado.prestados.push(suscriptor)
        
        // firestore e history de props
        const {firestore, history, libro } = this.props

        // almacenar a BD
        firestore.update({collection: 'libros', doc: libro.id}, libroActualizado)
        .then(history.push('/'))

    }

    render() {

        // extraer libro
        const { libro } = this.props

        if (!libro) return <Spinner />

        // extraer datos del suscriptor
        const { usuario } = this.props;

        let fichaSuscriptor, btnSolicitar
        if (usuario.nombre) {
            fichaSuscriptor = <FichaSuscriptor suscriptor={usuario} />
            btnSolicitar = <button type="button" className="btn btn-success" onClick={this.solicitarPrestamo}>Solicitar</button>
        } else {
            fichaSuscriptor = null
            btnSolicitar = null
        }

        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                        <i className="fa fas-arrow-circle-left"></i>
                        Regresar a listado
                    </Link>
                </div>

                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i> Solicitar prestamo: {libro.titulo}
                    </h2>
                    <div className="row justify-content-center mt-4">
                        <div className="col-md-8">
                            <form onSubmit={this.buscarSuscriptor} className="mb-4">
                                <legend className="color-primary text-center">
                                    Buscar suscriptor por código
                                </legend>
                                <div className="form-group">
                                    <input 
                                    type="text"
                                    name="busqueda"
                                    className="form-control"
                                    onChange={this.leerDato}
                                    />
                                </div>
                                <input type="submit" className="btn btn-success" value="Buscar suscriptor"/>
                            </form>

                            { /* Si existe datos del suscriptor */ }
                            {fichaSuscriptor}
                            {btnSolicitar}
                        </div>
                    </div>
                </div>               
            </div>
        )
    }
}

PrestamoLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'libros',
            storeAs: 'libro',
            doc: props.match.params.id
        }
    ]),
    connect(({ firestore: { ordered }, usuario }, props) => ({
        libro: ordered.libro && ordered.libro[0],
        usuario: usuario
    }), {buscarUsuario})
)(PrestamoLibro)