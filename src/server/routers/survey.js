const express = require('express')
const surveyRouter = express.Router()
let surveyModel = require('../models/survey.js')
let questionModel = require('../models/question')
const cors = require('cors')

surveyRouter.use(express.json())
surveyRouter.use(cors())

// get theme image from data base
surveyRouter.get('/theme', (req, res) => {

    async function getImage() {
        let { image } = await surveyModel.findOne()
        res.end(image)
    }

    getImage()
})

surveyRouter.get('/allSurveys', (req, res) => {
    // fins all surveys with the same user id
    async function findSurveyByUser() {
        let surveyList = await surveyModel.find()
        res.end(JSON.stringify(surveyList))
    }

    findSurveyByUser()
})

// get all question in survey list
surveyRouter.get('/questionList/:surveyId', (req, res) => {
    let surveyId = req.params.surveyId
    async function getQuestions() {
        let questionList = await questionModel.find({ surveyId: surveyId })
        res.end(JSON.stringify(questionList))
    }
    getQuestions()
})

surveyRouter.post('/newSurvey', (req, res) => {

    // add new survey to database
    async function createSurvey() {
        let newSurvey = new surveyModel(req.body)
        await newSurvey.save()
        res.end('survey added to db')
    }

    createSurvey()
})

surveyRouter.get('/sort', (req, res) => {
    // fins all surveys with the same user id in sorted order
    async function findSurveyByUserSorted() {
        let surveyList = await surveyModel.find().sort('surveyName')
        res.end(JSON.stringify(surveyList))
    }
    findSurveyByUserSorted()
})

// search survey by word in name
surveyRouter.post('/search', (req, res) => {
    let { word } = req.body
    // find all surveys where survey name container the given word
    async function findSurveyByWord() {
        let surveyList = await surveyModel.find({ surveyName: word })
        res.end(JSON.stringify(surveyList))
    }

    findSurveyByWord()
})

surveyRouter.put('/edit/:survey_id', (req, res) => {
    // make back end call using survey id
    // then send survey object for edit
    console.log(req.params.survey_id)
})

surveyRouter.delete('/delete/:survey_id', (req, res) => {
    // make back end call to delete survey
    async function deleteSurvey() {
        await surveyModel.findByIdAndDelete(req.params.survey_id)
        res.end()
    }

    deleteSurvey()
})

// when someone fuills up the survey
surveyRouter.post('/submitSurvey', (req, res) => {
    console.log(req.body)
})

module.exports = surveyRouter