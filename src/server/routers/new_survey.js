const express = require('express')
const surveyRouter = express.Router()
let surveyModel = require('../models/survey.js')

surveyRouter.use(express.json())

surveyRouter.get('/allSurveys', (req, res) => {
    // make back end call
    // then send array of all survey objects 
    console.log('all Surveys request')
})

surveyRouter.post('/newSurvey', (req, res) => {
    /* recieve an object like
    {
        "name": survey name,
        "description": survey description,
        "type": survey type,
        "stare-date": survey start date (string),
        "end-date": survey end date (string),
        "user-id": id of user from data base,
        "other-criteria": String,
        "image": String
    } 
    then make back end call to save new survey
    */
    console.log(req.body)
})

surveyRouter.get('/sort', (req, res) => {
    // make back end call using sort
    // then send array of all survey objects
    console.log('sort request')
})

surveyRouter.get('/search/:word', (req, res) => {
    // make back end call matching title with word
    // then send array of all survey objects
    console.log(req.params.word)
})

surveyRouter.put('/edit/:survey_id', (req, res) => {
    // make back end call using survey id
    // then send survey object for edit
    console.log(req.params.survey_id)
})

surveyRouter.delete('/delete/:survey_id', (req, res) => {
    // make back end call to delete survey
    console.log(req.params.survey_id)
})

// when someone fuills up the survey
surveyRouter.post('/submitSurvey', (req, res) => {
    console.log(req.body)
})

module.exports = surveyRouter