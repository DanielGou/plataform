const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require, unique: true},
    username: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    checkedEmail: { type: Boolean, default: false },
    posts: [type= Object],
    createdAt:{ type:Date, default: Date.now }
}, {collection: 'users'})

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model