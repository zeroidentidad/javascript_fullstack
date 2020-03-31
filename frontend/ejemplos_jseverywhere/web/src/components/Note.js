import React from 'react';
import ReactMarkdown from 'react-markdown';

import { useQuery } from '@apollo/client';

// import format utility `date-fns`
import { format } from 'date-fns';
import es  from 'date-fns/locale/es';

// css in js 
import styled from 'styled-components';

import NoteUser from './NoteUser';
// import IS_LOGGED_IN local query
import { IS_LOGGED_IN } from '../gql/query';

// notes extending wider 800px
const StyledNote = styled.article`
max-width: 800px;
margin: 0 auto;
`;

// style note metadata
const MetaData = styled.div`
@media (min-width: 500px) {
    display: flex;
    align-items: top;
}
`;

// space between avatar y meta info
const MetaInfo = styled.div`
padding-right: 1em;
`;

// align 'UserActions' to right (large screens)
const UserActions = styled.div`
margin-left: auto;
`;

const Note = ({ note }) => {

    const { loading, error, data } = useQuery(IS_LOGGED_IN);

    // si data loading, loading message
    if (loading) return <p>Cargando...</p>;
    // si error fetching data, error message
    if (error) return <p>Error!</p>;

    return (
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <img
                        src={note.author.avatar}
                        alt={`${note.author.username} avatar`}
                        height="50px"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>por:</em> {note.author.username} <br />
                    <em>el:</em> {format(note.createdAt, 'DD MMMM YYYY', { locale: es })}
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserActions>
                        <NoteUser note={note} />
                    </UserActions>
                ) : (
                    <UserActions>
                        <em>Favoritos:</em> {note.favoriteCount}
                    </UserActions>
                )}
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
};

export default Note;            