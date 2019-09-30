import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      <Link to="/" onClick={() => props.closeNav()}>Inicio</Link>
      <Link to="/vitamin" onClick={() => props.closeNav()}>Jugo de vitamina</Link>
      <a href="...">Suplementos</a>
      <a href="...">Contacto</a>
    </div>
  </div>
);

export default Navigation;
