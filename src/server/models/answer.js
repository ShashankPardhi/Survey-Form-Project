const mongoose = require('mongoose')

let answerSchema = mongoose.Schema({
    "response": String,
    "question-id": Number,
})

let answerModel = mongoose.model('Answers', answerSchema)

module.exports = answerModel