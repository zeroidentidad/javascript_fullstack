import React, {useState} from 'react'

const AgregarArticulo = () => {

    // State del componente
    const [articulo, guardarArticulo] = useState('')
    const [area, guardarArea] = useState('')
    const [fecha, guardarFecha] = useState('')
    const [modelo, guardarModelo] = useState('')
    const [descripcion, guardarDescripcion] = useState('')

    // Cuando el formulario es enviado
    const submitNuevoArticulo = e => {
        e.preventDefault();

        // Validar el formulario
        if (articulo.trim() === '' || area.trim() === '' || fecha.trim() === '' || modelo.trim() === '' || descripcion.trim() === '') {
            validarFormulario(true);
            return;
        }

        validarFormulario(false);

        // Crear nuevo articulo


        // Reiniciar el formulario

    }

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agregar articulo</h2>
                <form onSubmit={submitNuevoArticulo}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
                        <div className="col-sm-8 col-lg-10">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre del articulo"
                                value={articulo}
                                onChange={e => guardarArticulo(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Area</label>
                        <div className="col-sm-8 col-lg-10">
                            <select value={area} onChange={e => guardarArea(e.target.value)}>
                                <option value="">-Seleccionar uso-</option>
                                <option value="sala">Sala</option>
                                <option value="banio">Baño</option>
                                <option value="cosina">Cosina</option>
                                <option value="recamara">Recamara</option>
                                <option value="comedor">Comedor</option>                               
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha existencia</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input
                                type="date"
                                className="form-control"
                                value={fecha}
                                onChange={e => guardarFecha(e.target.value)}
                            />
                        </div>

                        <label className="col-sm-4 col-lg-2 col-form-label">Fab./modelo</label>
                        <div className="col-sm-8 col-lg-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Fabricante o modelo"
                                value={modelo}
                                onChange={e => guardarModelo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Descripción</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea
                                className="form-control"
                                value={descripcion}
                                onChange={e => guardarDescripcion(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AgregarArticulo
