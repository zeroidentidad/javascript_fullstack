import React from 'react';
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Notasocial Logo" height="40" />
            <h1>Notasocial</h1>
        </header>
    );
};

export default Header;