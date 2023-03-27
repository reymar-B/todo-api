const express = require('express');
const router = express.Router();

const { 
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos,
} = require('../controllers/todoController');

const {protect} = require('../middleware/auth');

router
    .get('/', protect, getTodos) // get all todo lists
    .post('/', protect, createTodos) // create todos 
    .put('/:todo_id', protect, updateTodos) // update todo
    .delete('/:todo_id', protect, deleteTodos) // delete todo

module.exports = router