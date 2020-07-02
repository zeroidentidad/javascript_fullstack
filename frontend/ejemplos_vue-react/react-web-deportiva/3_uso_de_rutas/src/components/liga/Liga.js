import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Estilos
import './Liga.css';

// Material
import Button from 'material-ui/Button';

// Componentes
import Equipo from './../common/equipo/Equipo';
import Jugador from './../common/jugador/Jugador';

// Imagenes
import LogoFelinos from './../../assets/logos/felinos.png';
import LogoPiratas from './../../assets/logos/piratas.png';
import LogoTiburones from './../../assets/logos/tiburones.png';
import FotoSergio from './../../assets/fotos/sergio.png';
import FotoManuel from './../../assets/fotos/manuel.png';
import FotoJose from './../../assets/fotos/jose.png';
import FotoPaco from './../../assets/fotos/paco.png';


class Liga extends Component {
  render() {
    return (
      <div className="contenedor">
        <div className="lista-equipos">
          <Equipo nombre="Felinos" logo={LogoFelinos} />
          <Equipo nombre="Piratas" logo={LogoPiratas} />
          <Equipo nombre="Tiburones" logo={LogoTiburones} />
        </div>

        <Button variant="raised" component={Link} to="/calendario/felinos" color="secondary">Ir al calendario</Button>

        <div className="lista-jugadores">
          <Jugador nombre="Sergio" foto={FotoSergio} />
          <Jugador nombre="Manuel" foto={FotoManuel} />
          <Jugador nombre="Jose" foto={FotoJose} />
          <Jugador nombre="Paco" foto={FotoPaco} />
        </div>
      </div >
    );
  }
}

export default Liga;
