import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
            <nav className="nav navbar-light">
                <span className="navbar-brand mb-0 h1">
                    <img src={logo} alt="Logo" height="48" width="96"/>
                </span>
            </nav>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/asistentes'} className="nav-link">
                            Asistentes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/asistentes/nuevo'} className="nav-link">
                            Ponentes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">
                            Asistentes Publica
                        </Link>
                    </li>                                      
                </ul>
            </div>
        </nav>
    )
}
