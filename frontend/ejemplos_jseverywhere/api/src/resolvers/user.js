module.exports = {
    // Resolver la lista de notas para un usuario cuando se solicite
    notes: async (user, args, { models }) => {
        return await models.Note.find({ author: user._id }).sort({
            _id: -1
        });
    },
    // Resolver la lista de favoritos para un usuario cuando se solicite
    favorites: async (user, args, { models }) => {
        return await models.Note.find({
            favoritedBy: user._id
        }).sort({ _id: -1 });
    }
};