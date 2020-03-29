module.exports = {
    // Resolver la información del autor para una nota cuando se solicite
    author: async (note, args, { models }) => {
        return await models.User.findById(note.author);
    },
    // Resolver favoritedBy info para una nota cuando se solicite
    favoritedBy: async (note, args, { models }) => {
        return await models.User.find({
            _id: {
                $in: note.favoritedBy
            }
        });
    }
};