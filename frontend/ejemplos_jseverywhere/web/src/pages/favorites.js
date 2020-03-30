import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_FAVORITES } from '../gql/query';

const Favorites = () => {

    useEffect(() => {
        document.title = 'Favoritos — Notasocial';
    });

    const { loading, error, data } = useQuery(GET_MY_FAVORITES);
    
    // si data es loading, mostrar loading message
    if (loading) return 'Cargando...';
    // si error fetching data, mostrar error message
    if (error) return `Error! ${error.message}`;
    // si query es successfull y hay, retornar feed notas
    // si query es successfull y no hay notas, mostrar mensaje
    if (data.me.favorites.length !== 0) {
        return <NoteFeed notes={data.me.favorites} />;
    } else {
        return <p>No hay favoritos todavía</p>;
    }
};

export default Favorites;