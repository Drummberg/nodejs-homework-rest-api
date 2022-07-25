const Joi = require('joi');

const favoriteScheme = Joi.object({
    favorite: Joi.boolean().required().messages({
        'any.required': 'missing field favorite'
      })
})

module.exports = favoriteScheme;
