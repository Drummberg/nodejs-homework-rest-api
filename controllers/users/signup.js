const { User } = require('../../models');
const { signupSchema } = require('../../sheme/user');
const { createError, sendEmail } = require("../../helpers");
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const {nanoid} = require("nanoid");

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
    const verificationToken = nanoid();
    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({ email, password: hashPassword, verificationToken, subscription, avatarURL, token });
    
    const mail = {
        to: email,
        subject: "Подтверждение регистрации на сайте",
        html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`
    }
    await sendEmail(mail);

    res.status(201).json({
        user: {
            email,
            subscription, 
            avatarURL
        }
    })
}

module.exports = signup;