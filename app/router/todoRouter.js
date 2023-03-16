const express = require('express')
const router = express.Router()

const { 

    getTodos,
    createTodos,
    updateTodos,
    deleteTodos,
  
} = require('../controllers/todoController')

router
    .get('/', getTodos) // get all todo lists

    .post('/', createTodos) // create todos 

    .put('/:todo_id', updateTodos) // update todo

    .delete('/:todo_id', deleteTodos) // delete todo

module.exports = router