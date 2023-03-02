const express = require('express')
const cors = require('cors')
const questionRouter = express.Router()
let questionModel = require('../models/question.js')
// let answerModel = require('../models/answer.js')

questionRouter.use(express.json())
questionRouter.use(cors())

// create new question in a survey
questionRouter.post('/addQuestion', (req, res) => {

    let { questionName, options } = req.body

    if (questionName !== '' && options !== []) {
        addQuestion()
    }

    async function addQuestion() {
        let newQuestion = new questionModel(req.body)
        await newQuestion.save()
        res.end()
    }
})

// change mcq status of question
questionRouter.post('/mcq', (req, res) => {

    res.end()
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

module.exports = questionRouter