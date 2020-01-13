import React, { useState } from 'react'

function AgregarProducto() {

    // state
    const [nombrePlatillo, guardarNombre] = useState('');    
    const [precioPlatillo, guardarPrecio] = useState('');
    const [categoria, guardarCategoria] = useState('');    

    const leerValorRadio = e => {
        guardarCategoria(e.target.value);
    }    

    return (
        <div className="col-md-8 mx-auto">
            <h1 className="text-center">Agregar Comida</h1>

            <form className="mt-5" >
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Nombre Platillo"
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Precio</label>
                    <input
                        type="number"
                        className="form-control"
                        name="precio"
                        placeholder="Precio Platillo"
                        onChange={e => guardarPrecio(e.target.value)}
                    />
                </div>

                <legend className="text-center">Categoría:</legend>
                <div className="text-center">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="postre"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">Postre</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="bebida"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">Bebida</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="cortes"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">Cortes</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="categoria"
                            value="ensalada"
                            onChange={leerValorRadio}
                        />
                        <label className="form-check-label">Ensalada</label>
                    </div>
                </div>

                <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar" />
            </form>
        </div>
    )
}

export default AgregarProducto
