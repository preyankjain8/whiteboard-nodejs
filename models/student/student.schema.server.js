const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    gradYear: Number,
    scholarship: Number
}, {collection: 'students'});
module.exports = studentSchema;
