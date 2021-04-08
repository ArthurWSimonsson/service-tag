const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Tag', tagSchema)