const { Schema, model } = require('mongoose');

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userSchema = Schema({
    email: {
        type: String,
        match: emailRegexp,
        required: [true, 'Email is required'],
        unique: true,
},
    password: {
        type: String,
        minlength: 10,
        required: [true, 'Password is required'],
},
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
},
    token: {
        type: String,
        default: null
    },
     avatarURL:  {
        type: String,
        required: true
    },
     verify: {
        type: Boolean,
        default: false,
      },
      verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
      },
}, { verisonKey: false, timestamps: true })

const User = model('user', userSchema);

module.exports = {
    User
};