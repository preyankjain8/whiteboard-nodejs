module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard-sp19';
    var   connectionString =
        'mongodb://localhost/';
    connectionString += databaseName;
    mongoose.connect(connectionString);
};
