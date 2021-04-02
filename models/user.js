const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require, unique: true},
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true}
}, {collection: 'users'})

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model