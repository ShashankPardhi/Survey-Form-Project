const express = require('express')
const surveyRouter = express.Router()
let surveyModel = require('../models/survey.js')

surveyRouter.use(express.json())

surveyRouter.post('/newSurvey', (req, res) => {
    console.log(req.body)
})