const Joi = require('joi');

const contactAddData = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().regex(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/).required(),
})
 
module.exports = contactAddData;