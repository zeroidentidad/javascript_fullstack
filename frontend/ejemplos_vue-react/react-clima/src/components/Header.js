import React from 'react';

function Header({titulo}) {
    return(
        <nav>
            <div className="nav-wrapper indigo darken-4">
                <a href="#!" className="brand-logo">
                    <img alt="Logo" src={require('../assets/logo.png')} width="60" height="50" />
                    <span>{titulo}</span>
                </a>
            </div>
        </nav>
    )
}

export default Header;