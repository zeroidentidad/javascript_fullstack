import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nosotros.css';

class Nosotros extends Component {
     state = {}
     render() { 
          return (
               <div className="contenedor-nosotros">
                    <div className="imagen">
                         <img src="/img/camisa_8.png" alt="imagen nosotros" />
                    </div>
                    <div className="contenido">
                         <h2>Sobre Nosotros</h2>
                         <p>La <b>DevStore</b>, un espacio de tematicas en TI, merchandising de comunidades tecnologicas e iniciativa startup con sede en localidad XYZ, EstadoX. 
                         Tenemos la misión de crear la tienda de productos fisicos y digitales de referencia para estudiantes, fans tecnológicos, emprendedores, geeks, desarrolladores de hardware o software.

                         Estando en ubicacion accesible nos aseguramos que las personas encuentren productos tecnológicos de la tienda y de creadores locales que resuelvan problemas o cubran alguna necesidad, para que ellos puedan centrarse en lo que mejor hacen: crear hardware o software increíble.
                         </p>
                         <div className="text-center" >
                              <Link to={`/productos`}>
                              <img src="/img/hero.jpg" alt="imagen nosotros" width="380" height="255"/>
                              </Link>
                         </div>
                    </div>                    
               </div>


           )
     }
}
 
export default Nosotros;