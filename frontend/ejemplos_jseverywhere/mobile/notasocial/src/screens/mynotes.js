import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

// GraphQL query
const GET_MY_NOTES = gql`
query me {
    me {
        id
        username
        notes {
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
}
`;

const MyNotes = props => {

    const { loading, error, data } = useQuery(GET_MY_NOTES);

    // si data loading, mostrar loading message
    if (loading) return <Loading />;

    // si error fetching data, error message
    if (error) return <Text>Error cargando notas!</Text>;   

    if (data.me.notes.length !== 0) {
        return <NoteFeed notes={data.me.notes} navigation={props.navigation} />;
    } else {
        return <Text>Aún no hay notas</Text>;
    }
};

MyNotes.navigationOptions = {
    title: 'Mis Notas'
};

export default MyNotes;