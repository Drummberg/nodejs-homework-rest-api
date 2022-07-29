const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { SECRET_KEY } = process.env;
const { createError } = require('../helpers');

const user = async (req, res, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    try {
        if (bearer !== 'Bearer') {
        throw createError(401);
    }
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        if (user !== user.token) {
            throw createError(401);
        }
        req.user = user;
        next()
    } catch (error) {
        next(createError(401, error.message));
    }
}

module.exports = user;
