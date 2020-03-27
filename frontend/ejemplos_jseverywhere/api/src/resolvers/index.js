// data mockup
let notes = [
    { id: '1', content: 'This is a note', author: 'Madafaka Watafak' },
    { id: '2', content: 'This is another note', author: 'Harlow Everly' },
    { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
];


const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        notes: () => notes,
        note: (parent, args) => {
            return notes.find(note => note.id === args.id);
        }
    },
    Mutation: {
        newNote: (parent, args) => {
            let noteValue = {
                id: String(notes.length + 1),
                content: args.content,
                author: 'ZeroIdentidad'
            };
            notes.push(noteValue);
            return noteValue;
        }
    }
};

module.exports = resolvers