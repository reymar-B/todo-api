const asyncHandler = require("express-async-handler");
const Todo = require('../models/todo');


// @desc    Get todos
// @route   GET /todos
// @access  Private

const getTodos = asyncHandler(async (req, res) => {

    const todos = await Todo.find()
    res.status(200).json(todos)

})


// @desc    Create todos
// @route   POST /todos
// @access  Private

const createTodos = asyncHandler(async (req, res) => {

    if (!req.body.todo) {
        res.status(400)
        throw new Error('Please add a todo field')
    }

    const todos = await Todo.create({
        todo: req.body.todo,
    })

    console.log(todos)

    res.status(201).json(todos)
})



// @desc    Update todos
// @route   Put /todos/:todo_id
// @access  Private

const updateTodos = asyncHandler(async (req, res) => {
   
    const todo = await Todo.findById(req.params.todo_id)

    if (!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }

    if (!req.body.todo) {
        res.status(400)
        throw new Error('Please add a todo field')
    }

    const updatedTodo = await Todo.findOneAndUpdate(
        {_id : req.params.todo_id}, 
        req.body, 
        {new : true}
    )

    res.status(200).json(updatedTodo);
})


// @desc    Delete todos
// @route   Delete /todos/:todo_id
// @access  Private

const deleteTodos = asyncHandler( async(req, res) => {

    const todo = await Todo.findById(req.params.todo_id)

    if (!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }

    await todo.deleteOne();
    res.status(200).json({ id: req.params.todo_id })
})

module.exports = {

    getTodos,
    createTodos,
    updateTodos,
    deleteTodos

}