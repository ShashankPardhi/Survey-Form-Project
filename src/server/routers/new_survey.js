const express = require('express')
const surveyRouter = express.Router()
let surveyModel = require('../models/survey.js')

surveyRouter.use(express.json())

surveyRouter.post('/newSurvey', (req, res) => {
    console.log(req.body)
})

surveyRouter.post('/submitSurvey', (req, res) => {
    console.log(req.body)
})

surveyRouter.post('/sort', (req, res) => {
    console.log(req.body)
})

surveyRouter.post('/search/:word', (req, res) => {
    console.log(req.params.word)
})