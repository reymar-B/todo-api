const expressAsyncHandler = require("express-async-handler");


// @desc    Get todos
// @route   GET /todos
// @access  Private

const getTodos = expressAsyncHandler( async(req, res) => { 

    res.status(200).json({message : 'list of todos'}) 

})


// @desc    Create todos
// @route   POST /todos
// @access  Private

const createTodos = (req, res) => { 

    console.log(req.body)

    res.status(201).json({message : 'create todos'}) 

}



// @desc    Update todos
// @route   Put /todos/:todo_id
// @access  Private

const updateTodos = (req, res) => { 

    res.status(200).json({message : 'update todos'}) 

}


// @desc    Delete todos
// @route   Delete /todos/:todo_id
// @access  Private

const deleteTodos = (req, res) => { 

    res.status(200).json({message :'delete todos'}) 

}

module.exports = {

    getTodos,
    createTodos,
    updateTodos,
    deleteTodos

}