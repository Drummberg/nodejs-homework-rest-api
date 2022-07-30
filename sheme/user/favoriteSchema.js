const Joi = require('joi');

const favoriteSchema = Joi.object({
    subscription: Joi.valid('starter', 'pro', 'business')
})

module.exports = favoriteSchema;