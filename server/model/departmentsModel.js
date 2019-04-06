const mongoose = require('mongoose');

const departmentsModel = new mongoose.Schema({
    // name: { type: String, unique :true }, 
    // description: {type: String}
    // // members: { type: Array}
});

module.exports = mongoose.model('Departments', departmentsModel);