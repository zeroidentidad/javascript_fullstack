import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ME } from '../gql/query';

// componente eliminar nota
import DeleteNote from './DeleteNote';
// agregar a favoritos component
import FavoriteNote from './FavoriteNote';

const NoteUser = props => {
 
    const { loading, error, data } = useQuery(GET_ME);

    // si data loading, loading message
    if (loading) return <p>Loading...</p>;

    // si error fetching data, error message
    if (error) return <p>No disponible!</p>;

    return (    
        <React.Fragment>
            <FavoriteNote
                me={data.me}
                noteId={props.note.id}
                favoriteCount={props.note.favoriteCount}
            />
            <br />
            {data.me.id === props.note.author.id && (
                <React.Fragment>
                    <Link to={`/edit/${props.note.id}`}>Editar</Link>
                    <br/>
                    <DeleteNote noteId={props.note.id} />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default NoteUser;