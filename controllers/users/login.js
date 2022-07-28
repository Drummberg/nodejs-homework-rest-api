const { User } = require('../../models');
const { loginSchema } = require('../../sheme/user');
const { createError } = require("../../helpers");
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        throw createError(400, 'Email is wrong'); 
    }
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    
    const comparePassword = bcrypt.compare(password, user.password);
    if (!comparePassword) {
        throw createError(401, 'Password is wrong')
    }

    const token = 'sdf.sdfsdfe444.535t45'
    res.json({
        token
    })
}

module.exports = login;
