const { User } = require('../../models');
const { signupSchema } = require('../../sheme/user');
const { createError } = require("../../helpers");
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message); 
    }
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if (user) {
        throw createError(409, `${email} is already exist`)
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashPassword });
    res.status(201).json({
        user: {
            email,
            
        }
    })
}

module.exports = signup;