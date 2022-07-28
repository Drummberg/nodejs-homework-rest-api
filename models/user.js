const { Schema, model } = require('mongoose');

const userSchema = Schema({
    password: {
        type: String,
        minlength: 10,
    required: [true, 'Password is required'],
},
    email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
},
    subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
},
    token: {
    type: String,
    default: null,
}
}, { verisonKey: false, timestamps: true })

const User = model('user', userSchema);

module.exports = {
    User
}