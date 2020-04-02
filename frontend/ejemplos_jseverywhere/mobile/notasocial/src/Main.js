import React from 'react';
import styled from 'styled-components/native'
import Screens from './screens';

// import Apollo libs
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';
// para recuperar token guardado
import AsyncStorage from '@react-native-community/async-storage';
// import environment config
import getEnvVars from '../config';

const { API_URI } = getEnvVars();

// config API URI y cache
const uri = API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

// retornar headers a context
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await AsyncStorage.getItem('token')) ||
        ''
    }
  };
});

// config Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

const Main = () => {
  // envolver en ApolloProvider higher-order component
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};

export default Main;
