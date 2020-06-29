const mongoose = require('mongoose');
const UserSchema = mongoose.Schema;

let User = new UserSchema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirmation: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', User);