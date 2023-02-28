const mongoose = require('mongoose')
const express = require('express')
const app = express()

// to suppress consolewarning
mongoose.set('strictQuery', true);

const loginRouter = require('./routers/login_register')
const surveyRouter = require('./routers/new_survey.js')

const mongo_db_url = 'mongodb://localhost:27017/survey'
mongoose.connect(mongo_db_url, () => {
    console.log('Connected to database')
})

app.use(loginRouter)
app.use(surveyRouter)

app.listen(8000, () => {
    console.log('Back End running...')
})