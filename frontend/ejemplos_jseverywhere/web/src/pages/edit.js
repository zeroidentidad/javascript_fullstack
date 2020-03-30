import React from 'react';
// import GraphQL libs
import { useQuery, useMutation } from '@apollo/client';

// import Note component
import NoteForm from '../components/NoteForm';

// note query, que acepta ID variable
import { GET_NOTE, GET_ME } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';

const EditNote = props => {
    // id en la url como variable
    const id = props.match.params.id;

    // query hook, pasando valor id como variable
    const { loading, error, data } = useQuery(GET_NOTE, {
        variables: { id }
    });

    // fetch data user actual
    const { data: userdata } = useQuery(GET_ME);

    // definir mutation
    const [editNote] = useMutation(EDIT_NOTE, {
        variables: {
            id
        },
        onCompleted: () => {
            props.history.push(`/note/${id}`);
        }
    });

    // si data is loading, loading message
    if (loading) return <p>Cargando...</p>;

    // si error fetching data, error message
    if (error) return <p>Error! Nota no encontrada</p>;

    // si user actual y autor de la nota no coinciden
    if (userdata.me.id !== data.note.author.id) {
        return <p>No tienes permitido editar esta nota</p>;
    }
    // pasar data a form component
    return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;