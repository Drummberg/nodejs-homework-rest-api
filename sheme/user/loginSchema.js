const Joi = require('joi');
const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(10).required(),
})

    module.exports = loginSchema;