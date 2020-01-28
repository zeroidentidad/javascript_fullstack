import React from 'react'

const NuevaPublicacion = () => {
    return (

        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar publicación</h2>
                        <form>
                            <div className="form-group">
                                <label>Titulo contenido</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Titulo contenido"
                                />
                            </div>
                            <div className="form-group">
                                <label>URL video/imagen de API Graph</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Video o imagen de API Graph"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevaPublicacion