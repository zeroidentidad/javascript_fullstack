import React from 'react'

const EditarPublicacion = () => {
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Editar Publicación</h2>
                        <form>
                            <div className="form-group">
                                <label>Titulo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo"
                                />
                            </div>
                            <div className="form-group">
                                <label>URL contenido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="URL"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarPublicacion