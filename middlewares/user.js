const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { SECRET_KEY } = process.env;
const { createError } = require('../helpers');

const user = async(req, _, next) => {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (bearer !== 'Bearer') {
        next(createError(401));
        }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const authUser = await User.findById(id);
    if (!authUser || !authUser.token) {
            next(createError(401));
        }
        req.user = authUser;
        next()
    } catch (error) {
        next(createError(401, error.message));
    }
}

module.exports = user;
