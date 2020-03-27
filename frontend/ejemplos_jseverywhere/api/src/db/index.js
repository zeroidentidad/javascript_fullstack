// mongoose library
const mongoose = require('mongoose');

module.exports = {
    connect: DB_HOST => {
        // Mongo driver's updated URL string parser
        mongoose.set('useNewUrlParser', true);
        // findOneAndUpdate() in place of findAndModify()
        mongoose.set('useFindAndModify', false);
        // createIndex() in place of ensureIndex()
        mongoose.set('useCreateIndex', true);
        // server discovery and monitoring engine
        mongoose.set('useUnifiedTopology', true);
        // Connect to DB
        mongoose.connect(DB_HOST);
        // Log an error if fail connect
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log('MongoDB connection error. Please make sure MongoDB is running.');
            process.exit();
        });
    },
    close: () => {
        mongoose.connection.close();
    }
};