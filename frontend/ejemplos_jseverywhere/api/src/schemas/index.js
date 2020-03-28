const { gql } = require('apollo-server-express');

const schemas = gql`
type Note {
id: ID!
content: String!
author: String!
}

type Query {
notes: [Note!]!
note(id: ID!): Note!
}

type Mutation {
newNote(content: String!): Note!
}
`;

module.exports = schemas