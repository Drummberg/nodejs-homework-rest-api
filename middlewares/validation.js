const { isValidObjectId } = require("mongoose");
const { createError } = require("../helpers");

const validateBody = (scheme) => {
    const data = (req, res, next) => {
        const { error } = scheme.validate(req.body);
        if (error) {
            error.status = 400;
            return next(error);
        }
        next();
    }
    return data;
};

const validateParams = (req, res, next) => {
    const { id } = req.params;
    const data = isValidObjectId(id);
    if (!data) {
        const error = createError(400, "Invalid id");
        return next(error);
    }
    next();
}

module.exports = { validateBody, validateParams }