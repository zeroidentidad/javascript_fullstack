import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Inicio
                        <span aria-hidden="true" role="img">{' '}🏠</span>                       
                    </Link>
                </li>
                <li>
                    <Link to="/mynotes">
                        Mis notas
                        <span aria-hidden="true" role="img">{' '}🗒️</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        Favoritos
                        <span aria-hidden="true" role="img">{' '}🌟</span> 
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;