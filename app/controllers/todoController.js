const asyncHandler = require("express-async-handler");
const Todo = require('../models/todo');
const User = require('../models/user');


// @desc    Get todos
// @route   GET /todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {

    const todos = await Todo.find({ user: req.user.id })
    res.status(200).json(todos)

})


// @desc    Create todos
// @route   POST /todos
// @access  Private
const createTodos = asyncHandler(async (req, res) => {

    console.log(req.user)

    if (!req.body.todo) {
        res.status(400)
        throw new Error('Please add a todo field')
    }

    const todos = await Todo.create({
        user: req.user.id,
        todo: req.body.todo,
    })

    res.status(201).json(todos)
})



// @desc    Update todos
// @route   Put /todos/:todo_id
// @access  Private
const updateTodos = asyncHandler(async (req, res) => {

    const todo = await Todo.findById(req.params.todo_id)

    console.log(todo)

    if (!todo) {
        res.status(400)
        throw new Error('Todo not found')
    }

    if (!req.body.todo) {
        res.status(400)
        throw new Error('Please add a todo field')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (todo.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedTodo = await Todo.findOneAndUpdate(
        { _id: req.params.todo_id },
        req.body,
        { new: true }
    )

    res.status(200).json(updatedTodo);
})


// @desc    Delete todos
// @route   Delete /todos/:todo_id
// @access  Private
const deleteTodos = asyncHandler(async (req, res) => {

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