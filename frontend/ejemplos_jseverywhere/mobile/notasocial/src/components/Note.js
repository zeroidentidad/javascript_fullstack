import React from 'react';
import { Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';

const NoteView = styled.ScrollView`
padding: 10px;
`;

const Note = ({ note }) => {
    return (
        <NoteView>
            <Text>
                Nota por: {note.author.username} / Publicada:{' '}
                {format(new Date(note.createdAt), 'dd MMMM yyyy', { locale: es })}
            </Text>
            <Markdown>{note.content}</Markdown>
        </NoteView>
    );
};

export default Note;