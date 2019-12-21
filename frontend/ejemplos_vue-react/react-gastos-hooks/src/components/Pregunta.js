import React, {Fragment, useState} from 'react';
import Error from './Error'

function Pregunta(props) {

    const { guardarPresupuesto } = props;    

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    // validar presupuesto 
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
    }    

    return (
        <Fragment>
            <h2>Ingresa total disponible</h2>
            {error ? <Error mensaje='Presupuesto no válido' /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
            </form>            
        </Fragment>
    );
}

export default Pregunta;