const express = require('express')
const colors = require('colors');
const { upperCase } = require('upper-case');
const dotenv = require('dotenv').config()
const path = require('path')
const pageRoute = require('./routes/routers')

//Port & app initialization
PORT = process.env.PORT || 4000
const app = express()

//static folder
app.use(express.static('public'))

//
app.use('/', pageRoute)

//Server Creation
app.listen(PORT, () => {
    console.log(upperCase(`port is running on ${PORT}`).bgGreen.black);
})