import React from 'react';
import ReactDOM from 'react-dom';

// import global styles
import GlobalStyle from '/components/GlobalStyle';

// import Apollo Client libs
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import paginas rutas
import Pages from '/pages';

// config API URI y cache
const uri = process.env.API_URI;
const cache = new InMemoryCache();

// config Apollo Client
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages/>
        </ApolloProvider>
    );
};            

ReactDOM.render(<App />, document.getElementById('root'));