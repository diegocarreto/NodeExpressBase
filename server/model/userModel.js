const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    user: { type: String, unique : true },
    name: { type: String }, 
    age: {type: Number}
});

module.exports = mongoose.model('Users', userModel);