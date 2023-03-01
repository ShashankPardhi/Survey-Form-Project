const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()

// to suppress console warning
mongoose.set('strictQuery', true);

// importing all routers
let loginRouter = require('./routers/login_register')
/* const surveyRouter = require('./routers/new_survey.js')
const questionRouter = require('./routers/question.js') */

app.use(loginRouter)

/* app.use(surveyRouter)
app.use(questionRouter)
 */

// connect database
const mongo_db_url = 'mongodb://localhost:27017/survey'
mongoose.connect(mongo_db_url, () => {
    console.log('Connected to database')
})

// running app
app.listen(8000, () => {
    console.log('Back End running...')
})

