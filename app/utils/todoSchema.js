const Joi = require('joi');

const schema = Joi.object({

    todo: Joi.string().required(),

})

module.exports = schema