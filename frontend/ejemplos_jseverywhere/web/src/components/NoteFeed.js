import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

// css in js
import styled from 'styled-components';

const NoteWrapper = styled.div`
max-width: 800px;
margin: 0 auto;
margin-bottom: 2em;
padding-bottom: 2em;
border-bottom: 1px solid #f5f4f0;
`;

const NoteFeed = ({ notes }) => {

    return (
        <div>
            {notes.map(note => (
                <div key={note.id}>
                    <NoteWrapper key={note.id}>
                        <Note note={note} />
                        <Link to={`note/${note.id}`}>Enlace</Link>
                    </NoteWrapper>
                </div>
            ))}
        </div>
    );
};
export default NoteFeed;