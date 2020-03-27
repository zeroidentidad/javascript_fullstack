// Models mongoDB
const models = require('../models');

const resolvers = {
    Query: {
        notes: async () => {
            return await models.Note.find();
        },
        note: async (parent, args) => {
            return await models.Note.findById(args.id);
        }
    },
    Mutation: {
        newNote: async(parent, args) => {
            return await models.Note.create({
                content: args.content,
                author: 'ZeroIdentidad'
            });
        }
    }
};

module.exports = resolvers