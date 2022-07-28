const { User } = require('../../models');
const { signupSchema } = require('../../sheme/user');
const { createError } = require("../../helpers");

const signup = async (req, res) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message); 
    }
    const { email} = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, `${email} is already exist`)
    }

    const result = await User.create(req.body);
    res.status(201).json({
        name: result.name,
        email: result.email
    })
}

module.exports = signup;