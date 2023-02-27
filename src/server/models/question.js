const mongoose = require('mongoose')

let questionSchema = mongoose.Schema({
    "question": String,
    "options": String,
    "survey-id": Number,
})

let questionModel = mongoose.model('Questions', questionSchema)

module.exports = questionModel