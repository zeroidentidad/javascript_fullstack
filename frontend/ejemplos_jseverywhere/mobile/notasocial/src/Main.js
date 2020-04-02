import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import Screens from './screens';

// import Apollo libs
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import environment config
import getEnvVars from '../config';

const { API_URI } = getEnvVars();

// config API URI y cache
const uri = API_URI;
const cache = new InMemoryCache();

// config Apollo Client
const client = new ApolloClient({
  uri,
  cache
});

const StyledView = styled.View`
flex: 1;
justify-content: center;
`;
const H1 = styled.Text`
font-size: 48px;
font-weight: bold;
`;
const P = styled.Text`
margin: 24px 0;
font-size: 18px;
`;

const Main = () => {
  // envolver en ApolloProvider higher-order component
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};

export default Main;
