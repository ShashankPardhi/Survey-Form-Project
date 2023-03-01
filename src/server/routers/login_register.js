const express = require('express')
const loginRouter = express.Router()
let userModel = require('../models/user.js')
const cors = require('cors')

loginRouter.use(express.json())
loginRouter.use(cors())

// user login
loginRouter.post('/login', (req, res) => {
    let { email, password } = req.body

    // validation of user input
    if (email === '' || password === '') {
        res.end("Email and password must be non empty")
    } else if (password.length < 8) {
        res.end("Password must have minimum 8 characters")
    } else {
        loginUser()
    }

    async function loginUser() {
        let isDataCorrect = await userModel.findOne({
            email: email,
            password: password
        })

        if (isDataCorrect === null) {
            res.end('Incorrect email or password')
        } else {
            res.end(`ok`)
        }

    }
})

// register new user
loginRouter.post('/register', (req, res) => {
    console.log(req.body)
    let { username, email, phone, profession, password } = req.body

    // validation of user input
    if (username === '' || email === '' || password === '' || phone === ''
        || profession === '' || password === '') {
        res.end('All fields are mandatory')
    } else if (password.length < 8) {
        res.end("Password must have minimum 8 characters")
    } else if (phone.length < 10) {
        res.end("Phone number must have at least 10 digits")
    } else {
        addUser()
    }

    async function addUser() {
        let newUser = new userModel({
            username: username,
            email: email,
            phone: phone,
            profession: profession,
            password: password
        })
        await newUser.save()
        // console.log(`Added ${username}`)
        res.end()
    }

    addUser()
})

module.exports = loginRouter