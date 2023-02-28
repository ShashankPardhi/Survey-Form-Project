const express = require('express')
const questionRouter = express.Router()
let questionModel = require('../models/question.js')
let answerModel = require('../models/answer.js')

questionRouter.use(express.json())

// create new question in a survey
questionRouter.post('/newQuestion', (req, res) => {
    // this will recieve an array of objects
    // each object being a question
    // the question object is
    // {
    //    "question": question text,
    //    "options": array of options,
    //    "survey-id": the id of survey in database
    // }
    console.log(req.body)
})

// record data when a question is answered in a survey
questionRouter.post('/response', (req, res) => {
    // this will recieve an array of objects
    // each object being a question
    // the question object is
    // {
    //    "question": question text,
    //    "options": array of options chosen by user,
    //    "survey-id": the id of survey in database
    // }
    console.log(req.body)
})

modeule.exports = questionRouter