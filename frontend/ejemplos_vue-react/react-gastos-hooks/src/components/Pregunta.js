import React, {Fragment, useState} from 'react';
import Error from './Error'

function Pregunta(props) {

    const { guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante } = props;    

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
        guardarPreguntaPresupuesto(false);
        guardarRestante(cantidad);
    }    

    return (
        <Fragment>
            <h2>Ingresa total a disponer</h2>
            {error ? <Error mensaje='Presupuesto no válido' /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input type="number"
                    className="u-full-width"
                    placeholder="Agrega presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input type="submit" className="button-primary" value="Definir presupuesto" />
            </form>            
        </Fragment>
    );
}

export default Pregunta;