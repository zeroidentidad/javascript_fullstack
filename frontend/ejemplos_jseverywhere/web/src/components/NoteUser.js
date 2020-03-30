import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ME } from '../gql/query';

const NoteUser = props => {
 
    const { loading, error, data } = useQuery(GET_ME);

    // si data loading, loading message
    if (loading) return <p>Loading...</p>;
    // si error fetching data, error message
    if (error) return <p>Error!</p>;
    return (    
        <React.Fragment>
            Favorites: {props.note.favoriteCount}
            <br />
            {data.me.id === props.note.author.id && (
                <React.Fragment>
                    <Link to={`/edit/${props.note.id}`}>Editar</Link>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default NoteUser;