import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_MY_NOTES } from '../gql/query';

const MyNotes = () => {
    
    useEffect(() => {
        document.title = 'Mis Notas — Notasocial';
    });

    const { loading, error, data } = useQuery(GET_MY_NOTES);

    // si data es loading, mostrar loading message
    if (loading) return 'Cargando...';
    // si error fetching data, mostrar error message
    if (error) return `Error! ${error.message}`;
    // si query es successfull y hay, retornar feed notas
    // si query es successfull y no hay notas, mostrar mensaje
    if (data.me.notes.length !== 0) {
        return <NoteFeed notes={data.me.notes} />;
    } else {
        return <p>Aún no hay notas</p>;
    }
};

export default MyNotes;    