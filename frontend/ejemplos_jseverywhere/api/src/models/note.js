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
            type: String,
            required: true
        }
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