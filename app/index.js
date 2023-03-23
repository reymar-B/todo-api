const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connection');
const todos = require('./routes/todoRoutes');
const users = require('./routes/userRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todos);
app.use('/users', users);

app.use(errorHandler);

app.listen(port)