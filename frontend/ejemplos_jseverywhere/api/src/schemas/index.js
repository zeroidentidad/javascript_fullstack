const schemas = `
type Note {
id: ID!
content: String!
author: String!
}

type Query {
hello: String!
notes: [Note!]!
note(id: ID!): Note!
}

type Mutation {
newNote(content: String!): Note!
}
`;

module.exports = schemas