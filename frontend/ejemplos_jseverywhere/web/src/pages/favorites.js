import React, { useEffect } from 'react';

const Favorites = () => {

    useEffect(() => {
        document.title = 'Favoritos — Notasocial';
    });

    return (
        <div>
            <h1>Notasocial</h1>
            <p>Aqui mis favoritos prro</p>
        </div>
    );
};

export default Favorites;