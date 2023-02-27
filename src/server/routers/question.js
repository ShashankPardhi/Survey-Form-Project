const express = require('express')
const questionRouter = express.Router()
let questionModel = require('../models/question.js')
let answerModel = require('../models/answer.js')

questionRouter.use(express.json())

// create new question in a survey
questionRouter.post('/newQuestion', (req, res) => {
    console.log(req.body)
})

// record data when a question is answered in a survey
questionRouter.post('/response', (req, res) => {
    console.log(req.body)
})