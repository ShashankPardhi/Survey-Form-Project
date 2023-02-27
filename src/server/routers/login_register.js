const express = require('express')
const loginRouter = express.Router()
let userModel = require('../models/user.js')

loginRouter.use(express.json())

// user login
loginRouter.post('/login', (req, res) => {
    let { email, password } = req.body

    async function loginUser() {
        let isDataCorrect = await userModel.findOne({
            email: email,
            password: password
        })

        if (isDataCorrect === null) {
            res.end('Incorrect email or password')
        } else {
            res.end(`Welcome ${isDataCorrect.username}`)
        }

    }

    loginUser()
})

// register new user
loginRouter.post('/register', (req, res) => {
    let { username, email, phone, profession, password } = req.body

    async function addUser() {
        let newUser = new userModel({
            username: username,
            email: email,
            phone: phone,
            profession: profession,
            password: password
        })
        await newUser.save()
        res.end(`Added ${username}`)
    }

    addUser()
})

module.exports = loginRouter