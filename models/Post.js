const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    authorId: { type: String, require: true },
    authorName: { type: String, require: true },
    file: { type: Object },
    createdAt:{ type:Date, default: Date.now }
})

const model = mongoose.model('Posts', PostSchema)

module.exports = model