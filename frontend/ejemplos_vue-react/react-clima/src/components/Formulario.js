import React, { useState } from 'react';

function Formulario({datosConsulta}) {

    // state Componente equivalente:
    // busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })

    const handleChange = e => {
        // Cambiar state
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        });

        //console.log(busqueda);
    }

    const consultarClima = e => {
        e.preventDefault();

        // pasar hacia el componente principal la busqueda
        datosConsulta(busqueda);
    }


    return(
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="input-field col s12">
                <button className="waves-effect waves-light btn-large btn-block indigo darken-3" type="submit">
                    Buscar
                </button>                
            </div>
        </form>
    )
}
export default Formulario;