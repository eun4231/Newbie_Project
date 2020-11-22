const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    todo : String,
    due : Date
})
module.exports = mongoose.model('user', userSchema);