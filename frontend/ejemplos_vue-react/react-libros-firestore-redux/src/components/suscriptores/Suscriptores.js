import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Link} from 'react-router-dom'
import Spinner from '../layout/BounceDelay/Spinner'

const Suscriptores = ({suscriptores}) => {

    if (!suscriptores) return <Spinner />

    return (
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to="/suscriptores/nuevo" className="btn btn-primary">
                    <i className="fas fa-plus"></i> Nuevo suscriptor
                </Link>
            </div>
            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users"></i> Suscriptores
                </h2>
            </div>

            <table className="table table-striped mt-4">
                <thead className="text-light bg-primary">
                    <tr>
                        <td>Codigo</td>
                        <td>Nombre</td>
                        <td>Carrera</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {suscriptores.map(suscriptor=>(
                        <tr key={suscriptor.id}>
                            <td>{suscriptor.codigo}</td>
                            <td>{suscriptor.nombre} {suscriptor.apellido}</td>
                            <td>{suscriptor.carrera}</td>
                            <td>
                                <Link 
                                to={`/suscriptores/mostrar/${suscriptor.id}`}
                                className="btn btn-success btn-block"
                                >
                                    <i className="fas fa-angle-double-right"></i> Más info...
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default compose(
    firestoreConnect([{collection: 'suscriptores'}]),
    connect((state, props) => ({ suscriptores: state.firestore.ordered.suscriptores }))
)(Suscriptores)