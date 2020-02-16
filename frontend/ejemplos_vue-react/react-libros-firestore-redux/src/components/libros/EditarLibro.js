import React, { Component } from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import Spinner from '../layout/BounceDelay/Spinner'
import PropTypes from 'prop-types'

class EditarLibro extends Component {

    // react Refs
    tituloInput = React.createRef();
    editorialInput = React.createRef();
    isbnInput = React.createRef();
    existenciaInput = React.createRef(); 
    
    // editar en bd
    editarLibro = e =>{
        e.preventDefault()

        // crear obj a actualizar
        const libroActualizado = {
            titulo: this.tituloInput.current.value,
            editorial: this.editorialInput.current.value,
            isbn: this.isbnInput.current.value,
            existencia: this.existenciaInput.current.value,
        }

        // extraer firestore, history de props 
        const {libro, firestore, history} = this.props;

        // almacenar en bd con firestore
        firestore.update({
            collection: 'libros',
            doc: libro.id
        }, libroActualizado).then(history.push('/'))
    }    
    
    render() {

        const { libro } = this.props

        if (!libro) return <Spinner />

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
                        <i className="fas fa-book"></i> Editar Libro
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-4">
                            <form onSubmit={this.editarLibro}>
                                <div className="form-group">
                                    <label htmlFor="titulo">Titulo:</label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="titulo"
                                    placeholder="Titulo o nombre libro"
                                    required
                                    defaultValue={libro.titulo}
                                    ref={this.tituloInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editorial">Editorial:</label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="editorial"
                                    placeholder="Editorial libro"
                                    required
                                    defaultValue={libro.editorial}
                                    ref={this.editorialInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="isbn">ISBN:</label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="isbn"
                                    placeholder="ISBN libro"
                                    required
                                    defaultValue={libro.isbn}
                                    ref={this.isbnInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="existencia">Existencia:</label>
                                    <input 
                                    type="number"
                                    min="0"
                                    className="form-control"
                                    name="existencia"
                                    placeholder="existencia libro"
                                    required
                                    defaultValue={libro.existencia}
                                    ref={this.existenciaInput}
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
        )
    }
}

EditarLibro.propTypes = {
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
    connect(({ firestore: { ordered } }, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(EditarLibro)