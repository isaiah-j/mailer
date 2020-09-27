const express = require('express')
const sendEmail = require('./email')
const app = express()

app.use(express.json())

app.get('/', () => {
    res.status(200).json({
        api: 'up'
    })
})

app.post('/contact', async (req, res) => {
    console.log(req.body)
    try {       
        await sendEmail({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        res.status(200).json({
            status: 200,
            message: "Email has been sent"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: "Unable to send email"
        })
    }
})


module.exports = app