// mongoose library
const mongoose = require('mongoose');

// Definir notes database schema
const noteSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        // agregar la propiedad favoriteCount
        favoriteCount: {
            type: Number,
            default: 0
        },
        // agregar la propiedad favoritedBy
        favoritedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]            
    },
    {
        // Asignar createdAt y updatedAt fields con Date type
        timestamps: true
    }
);

// Definir 'Note' model con schema
const Note = mongoose.model('Note', noteSchema);

// Export
module.exports = Note;