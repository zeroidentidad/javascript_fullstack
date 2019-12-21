import React, {Fragment} from 'react';

function Pregunta() {

    return (
        <Fragment>
            <h2>Ingresa total disponible</h2>
            <form >
                <input type="number"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => {alert("Ward :v")}}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
            </form>            
        </Fragment>
    );
}

export default Pregunta;