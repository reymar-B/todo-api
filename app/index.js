const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const todos = require('./router/todoRouter')

const app = express()

app.use( '/todos', todos )


app.listen(port)