const mongoose = require('mongoose')

let surveySchema = mongoose.Schema({
    "name": String,
    "description": String,
    "type": Number,
    "stare-date": String,
    "end-date": String,
    "user-id": Number,
    "other-criteria": String,
    "image": String
})

let surveyModel = mongoose.model('Surveys', surveySchema)

module.exports = surveyModel