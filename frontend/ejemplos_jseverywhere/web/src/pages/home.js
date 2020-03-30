import React from 'react';
import ReactMarkdown from 'react-markdown';

// import graphql libs
import { useQuery, gql } from '@apollo/client';

import Button from '../components/Button';
import NoteFeed from '../components/NoteFeed';

// GraphQL query, stored variable
const GET_NOTES = gql`
query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
        cursor
        hasNextPage
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

const Home = () => {

    // query hook
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES); 
    
    // si data es loading, loading message
    if (loading) return <p>Cargando...</p>;
    
    // si error fetching data, error message
    if (error) return <p>Error!</p>;    
    
    // data successfull, data en UI
    return (
    <React.Fragment>    
        <NoteFeed notes={data.noteFeed.notes} />
        {/* mostrar boton si hasNextPage es true */}
        {data.noteFeed.hasNextPage && (
                <Button
                onClick={() =>
                    fetchMore({
                        variables: {
                        cursor: data.noteFeed.cursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            return {
                            noteFeed: {
                                cursor: fetchMoreResult.noteFeed.cursor,
                                hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                                // combinar nuevos resultados con los anteriores
                                notes: [
                                    ...previousResult.noteFeed.notes,
                                    ...fetchMoreResult.noteFeed.notes
                                ],
                                __typename: 'noteFeed'
                                }
                            };
                        }
                    })
                }
                >
                Mostrar más
                </Button>
        )}
    </React.Fragment>        
    );
};

export default Home;