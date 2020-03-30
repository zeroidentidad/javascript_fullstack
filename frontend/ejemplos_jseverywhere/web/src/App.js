import React from 'react';
import ReactDOM from 'react-dom';

// import global styles
import GlobalStyle from '/components/GlobalStyle';

// import Apollo Client libs
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

// import paginas rutas
import Pages from '/pages';

// config API URI y cache
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });
const cache = new InMemoryCache();

// revisar por un token y retornar headers al context
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    };
});

// config Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
    connectToDevTools: true
});

// verificar por token local
const data = {
    isLoggedIn: !!localStorage.getItem('token')
};

// escribir data cache en carga inicial
cache.writeData({ data });

// escribir cache data despues de cache reset
client.onResetStore(() => cache.writeData({ data }));

const App = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Pages/>
        </ApolloProvider>
    );
};            

ReactDOM.render(<App />, document.getElementById('root'));