import React, {Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';

const ControlPresupuesto = ({presupuesto, restante}) => ( 
    <Fragment>
        <div className="alert alert-primary">
            <b>Presupuesto: $ {presupuesto}</b>
        </div>
        <div className={revisarPresupuesto(presupuesto, restante)}>
            <u>Restante : $ {restante}</u>
        </div>
    </Fragment>

 );
 
export default ControlPresupuesto;