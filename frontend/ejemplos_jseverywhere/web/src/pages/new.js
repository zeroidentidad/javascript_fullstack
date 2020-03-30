import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import NoteForm from '../components/NoteForm';

import { GET_NOTES, GET_MY_NOTES } from '../gql/query';

const NEW_NOTE = gql`
mutation newNote($content: String!) {
    newNote(content: $content) {
        id
        content
        createdAt
        favoriteCount
        favoritedBy {
            id
            username
        }
        author {
            username
            id
        }
    }
}
`;

const NewNote = props => {

    useEffect(() => {
        // update document title
        document.title = 'Nueva Nota — Notasocial';
    });

    const [data, { loading, error }] = useMutation(NEW_NOTE, {
        // refetch GET_MY_NOTES y GET_NOTES query update cache
        refetchQueries: [{ query: GET_MY_NOTES }, {query: GET_NOTES}],
        onCompleted: data => {
            // cuando completada, redirect a page nota
            props.history.push(`note/${data.newNote.id}`);
        }
    });

    return (
        <React.Fragment>
            {/* mutation es loading, mostrar loading message*/}
            {loading && <p>Cargando...</p>}
            {/* si error, mostrar error message*/}
            {error && <p>Error guardando nota</p>}
            {/* pasando mutation data como prop */}
            <NoteForm action={data} />
        </React.Fragment>
    );
};

export default NewNote;