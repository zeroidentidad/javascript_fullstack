module.exports = {
    notes: async (parent, args, { models }) => {
        return await models.Note.find()
    },
    note: async (parent, args, { models }) => {
        return await models.Note.findById(args.id);
    },
    user: async (parent, { username }, { models }) => {
        // encontrar un usuario dado su username
        return await models.User.findOne({ username });
    },
    users: async (parent, args, { models }) => {
        // encontrar todos los usuarios
        return await models.User.find({});
    },
    me: async (parent, args, { models, user }) => {
        // encontrar un usuario pasando el contexto del usuario actual
        return await models.User.findById(user.id);
    }   
}