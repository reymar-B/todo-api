const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const todos = require('./router/todoRouter');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connection');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use( '/todos', todos )


app.use(errorHandler)

app.listen(port)