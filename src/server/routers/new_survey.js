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

surveyRouter.get('/sort', (req, res) => {
    console.log('sort request')
})

surveyRouter.get('/search/:word', (req, res) => {
    console.log(req.params.word)
})

surveyRouter.put('/edit/:survey_id', (req, res) => {
    console.log(req.params.survey_id)
})

surveyRouter.delete('/delete/:survey_id', (req, res) => {
    console.log(req.params.survey_id)
})

module.exports = surveyRouter