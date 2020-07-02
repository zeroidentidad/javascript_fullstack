import React, { Component } from 'react';

// Estilos
import './Calendario.css';

// Componentes
import Juego from './../common/juego/Juego';

// Imagenes
import LogoFelinos from './../../assets/logos/felinos.png';
import LogoPiratas from './../../assets/logos/piratas.png';
import LogoTiburones from './../../assets/logos/tiburones.png';


class Calendario extends Component {
    render() {
        return (
            <div className="calendarios">
                Equipo: {this.props.match.params.equipo}
                <Juego
                    localNombre="Felinos"
                    localLogo={LogoFelinos}
                    localAnotaciones="2"
                    visitanteNombre="Piratas"
                    visitanteLogo={LogoPiratas}
                    visitanteAnotaciones="1"
                    estadio="Estadio Olímpico"
                    fecha="20-Abril-2018"
                    hora="8:00 pm" />
                <Juego
                    localNombre="Piratas"
                    localLogo={LogoPiratas}
                    localAnotaciones="2"
                    visitanteNombre="Tiburones"
                    visitanteLogo={LogoTiburones}
                    visitanteAnotaciones="2"
                    estadio="Estadio Universitario"
                    fecha="24-Abril-2018"
                    hora="7:00 pm" />
                <Juego
                    localNombre="Tiburones"
                    localLogo={LogoTiburones}
                    localAnotaciones="1"
                    visitanteNombre="Felinos"
                    visitanteLogo={LogoFelinos}
                    visitanteAnotaciones="4"
                    estadio="Estadio de la Ciudad"
                    fecha="26-Abril-2018"
                    hora="9:00 pm" />
            </div>
        );
    }
}

export default Calendario;
