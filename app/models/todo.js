const mongoose = require('mongoose');
const Joi = require('joi')

const todoSchema = mongoose.Schema({

    todo: {
        type: String,
        required: [true, 'Please add a text value'],
    },
},

    {
        timestamps: true,
    }

)

module.exports = mongoose.model('Todo', todoSchema)