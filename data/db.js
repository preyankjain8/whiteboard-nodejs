module.exports = function () {
    const mongoose = require('mongoose');
    //const databaseName = 'whiteboard-sp19';
    var   connectionString =
        'mongodb://heroku_8t1jzp2z:au65f0ppjhkh9ov63ar6jnefj4@ds139576.mlab.com:39576/heroku_8t1jzp2z';
    //connectionString += databaseName;
    mongoose.connect(connectionString);
};
