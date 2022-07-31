const Joi = require('joi');
const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;


const signupSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(10).required(),
    subscription: Joi.string(),
    token: Joi.string()
})

module.exports = signupSchema;
