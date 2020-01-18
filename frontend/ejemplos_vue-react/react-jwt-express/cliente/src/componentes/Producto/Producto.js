import React from 'react';
import { Link } from 'react-router-dom';

const Producto = (props) => {
     const { imagen, nombre, precio, id } = props.informacion;
     return (
          <li>
               <img src={`img/${imagen}.png`} alt={nombre} />
               <p>{nombre} <span> $ {precio} </span></p>
               <Link to={{
                    pathname: `/producto/${id}`,
                    state: {producto: props.informacion}
               }}>Más Información</Link>
          </li>
     )
}

export default Producto;