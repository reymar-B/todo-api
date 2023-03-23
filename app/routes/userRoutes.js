const express = require('express')
const router = express.Router()

const {
    registerUser,
    loginUser,
    getUser,
} = require('../controllers/userController')

// const { protect } = require('../middleware/authMiddleware')

router
    .post('/', registerUser) // Register a user
    .post('/login', loginUser) // Logged a user
    .get('/data', getUser) // Get user data


module.exports = router