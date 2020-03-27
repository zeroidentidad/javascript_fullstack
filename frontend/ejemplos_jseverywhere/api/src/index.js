const express = require('express');
const app = express();

const { ApolloServer, gql } = require('apollo-server-express');

require('dotenv').config();
const db = require('./db');

// en .env file
const DB_HOST = process.env.DB_HOST;

const port = process.env.PORT || 4000;

// conectar a db
db.connect(DB_HOST);

// Construir schema, usando el lenguaje de esquema GraphQL
const schemas = require('./schemas')
const typeDefs = gql`${schemas}`;

// Proporcionar funciones resolver para campos de esquema
const resolvers = require('./resolvers')

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Aplicar middleware Apollo GraphQL y establecer la ruta a /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
    console.log(`GraphQL Server en: http://localhost:${port}${server.graphqlPath}`)
);