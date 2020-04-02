import React from 'react';
import { Text } from 'react-native';
import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';
import { useQuery, gql } from '@apollo/client';

const GET_NOTES = gql`
query notes {
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
`;

const Feed = props => {
    const { loading, error, data } = useQuery(GET_NOTES);

    // si loading, mostrar loading indicator
    if (loading) return <Loading />;

    // si error fetching data, mostrar error message
    if (error) return <Text>Error loading notes</Text>;

    // si query successful y hay notas, retornar feed de notas
    return <NoteFeed notes={data.notes} navigation={props.navigation} />;
};

Feed.navigationOptions = {
    title: 'Feed notas'
};

export default Feed;