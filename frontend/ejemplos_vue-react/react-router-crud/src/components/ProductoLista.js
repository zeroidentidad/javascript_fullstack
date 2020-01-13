import React from 'react';

function ProductoLista({ producto }) {

    return (
        <li data-categoria={producto.categoria} className="list-group-item d-flex justify-content-between align-items-center">
            <p >
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">${producto.precioPlatillo}</span>
            </p>
        </li>
    )
}

export default ProductoLista;