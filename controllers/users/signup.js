const { User } = require('../../models');
const { signupSchema } = require('../../sheme/user');
const { createError } = require("../../helpers");
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const signup = async (req, res) => {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        throw createError(400, error.message); 
    }
    const { email, password, subscription, token } = req.body;
    const user = await User.findOne({email});

    if (user) {
        throw createError(409, `${email} is already exist`)
    }

    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashPassword, subscription, avatarURL, token });
    res.status(201).json({
        user: {
            email,
            subscription, 
            avatarURL
        }
    })
}

module.exports = signup;