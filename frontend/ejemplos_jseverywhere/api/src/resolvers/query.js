module.exports = {
    notes: async (parent, args, { models }) => {
        return await models.Note.find().limit(100);
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
    },
    noteFeed: async (parent, { cursor }, { models }) => {
        // hardcode límite de 10 elementos
        const limit = 10;
        // establecer el valor predeterminado hasNextPage en falso
        let hasNextPage = false;
        // si no se pasa el cursor, la consulta predeterminada estará vacía
        // esto extraerá las notas más recientes de la base de datos
        let cursorQuery = {};
        // si hay un cursor
        // nuestra consulta buscará notas con un ObjectId menor que el del cursor
        if (cursor) {
            cursorQuery = { _id: { $lt: cursor } };
        }
        // encontrar el límite + 1 de notas en base de datos, ordenadas de la más nueva a la más antigua
        let notes = await models.Note.find(cursorQuery)
            .sort({ _id: -1 })
            .limit(limit + 1);
        // si el número de notas encontradas excede el límite
        // establecer hasNextPage en true y trim las notas hasta el limite
        if (notes.length > limit) { 
            hasNextPage = true;
            notes = notes.slice(0, -1);   
        }
        
        // el nuevo cursor será el ID del objeto Mongo del último elemento en array del feed
        const newCursor = notes[notes.length - 1]._id;

        return {
            notes,
            cursor: newCursor,
            hasNextPage
        };
    }
}