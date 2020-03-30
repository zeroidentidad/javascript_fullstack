import React from 'react';
import ReactMarkdown from 'react-markdown';

// import format utility `date-fns`
import { format } from 'date-fns';
import es  from 'date-fns/locale/es';

// css in js 
import styled from 'styled-components';

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

    return (
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <img
                        src={note.author.avatar}
                        alt="{note.author.username} avatar"
                        height="50px"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> {note.author.username} <br />
                    {format(note.createdAt, 'DD MMMM YYYY', { locale: es })}
                </MetaInfo>
                <UserActions>
                    <em>Favorites:</em> {note.favoriteCount}
                </UserActions>
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
};

export default Note;            