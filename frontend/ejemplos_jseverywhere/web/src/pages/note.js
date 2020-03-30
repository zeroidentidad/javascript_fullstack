import React from 'react';
// import GraphQL libs
import { useQuery, gql } from '@apollo/client';

// import Note component
import Note from '../components/Note';

// note query, que acepta ID variable
const GET_NOTE = gql`
query note($id: ID!) {
    note(id: $id) {
        id
        createdAt
        content
        favoriteCount
        author {
            username
            id
            avatar
        }
    }
}
`;

const NotePage = props => {
    // id en la url como variable
    const id = props.match.params.id;

    // query hook, pasando valor id como variable
    const { loading, error, data } = useQuery(GET_NOTE, {
        variables: { id }
    });

    // si data is loading, loading message
    if (loading) return <p>Cargando...</p>;

    // si error fetching data, error message
    if (error) return <p>Error! Nota no encontrada</p>;

    // si data successfull, mostrar
    return <Note note={data.note} />;
};

export default NotePage;