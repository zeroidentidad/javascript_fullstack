import React from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import ButtonAsLink from './ButtonAsLink';

import { DELETE_NOTE } from '../gql/mutation';
// import queries para refetch despues de eliminar nota
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = props => {

    const [deleteNote] = useMutation(DELETE_NOTE, {
        variables: {
            id: props.noteId
        }, 
        // refetch lista queries para update cache
        refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES }],
        onCompleted: data => { 
            // redirect the user to the "my notes" page
            props.history.push('/mynotes');  
        }
    });    

    return <ButtonAsLink onClick={deleteNote}>Eliminar</ButtonAsLink>;
};

export default withRouter(DeleteNote);