const cors = require('cors');
const helmet = require('helmet')
const express = require('express');
const app = express();
app.use(helmet());
app.use(cors());

const depthLimit = require('graphql-depth-limit');
const { createComplexityLimitRule } = require('graphql-validation-complexity');
const { ApolloServer } = require('apollo-server-express');

const jwt = require('jsonwebtoken');

require('dotenv').config();
const db = require('./db');

// en .env file
const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;

// conectar a db
db.connect(DB_HOST);

// Models mongoDB
const models = require('./models');

// Construir schema, usando el lenguaje de esquema GraphQL
const typeDefs = require('./schemas')

// Proporcionar funciones resolver para campos de esquema
const resolvers = require('./resolvers')

// obtener información de usuario en JWT
const getUser = token => {
    if (token) {
        try {
            // devolver información del usuario desde token
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            // si hay un problema con el token, arrojar error
            throw new Error('Session invalid');
        }
    }
};

// Apollo Server setup
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    validationRules: [depthLimit(5), createComplexityLimitRule(1000)], 
    context: ({ req }) => {
        // obtener el token de usuario de los encabezados
        const token = req.headers.authorization;
        // intentar obtener un usuario con el token
        const user = getUser(token);
        // registrar al usuario en la consola: 
        // console.log(user);        
        // Agregar db models al contexto
        return { models, user };
    }
});

// Aplicar middleware Apollo GraphQL y establecer la ruta a /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () =>
    console.log(`GraphQL Server en: http://localhost:${port}${server.graphqlPath}`)
);