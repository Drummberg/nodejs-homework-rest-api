const { validateBody, validateParams } = require('./validation');
const user = require('./user');
const upload = require('./upload');

module.exports = {
    validateBody,
    validateParams,
    user,
    upload
}