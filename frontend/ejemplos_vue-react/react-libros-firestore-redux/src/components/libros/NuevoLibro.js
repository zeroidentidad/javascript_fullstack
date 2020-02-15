import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NuevoLibro extends Component {
    state = {
        titulo: '',
        isbn: '',
        editorial: '',
        existencia: ''
    }
    render() {
        return (
            <div className="row">
                <div className="col-12-mb-4">
                    <Link to={'/'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i> Regresar a listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fa fa-book"></i> Nuevo Libro
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="titulo">Titulo:</label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="titulo"
                                    placeholder="Titulo o nombre libro"
                                    required
                                    value={this.state.titulo}
                                    onChange={this.leerDato}
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
                                    value={this.state.editorial}
                                    onChange={this.leerDato}
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
                                    value={this.state.isbn}
                                    onChange={this.leerDato}
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
                                    value={this.state.existencia}
                                    onChange={this.leerDato}
                                    />
                                </div>

                                <input type="submit" value="Agregar" className="btn btn-success"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NuevoLibro