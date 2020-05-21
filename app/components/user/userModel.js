const mongoose = require('mongoose');

const user = {
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    document: {
        type: Number,
        required: false,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: Number,
        required: true
    },
};

let userSchema = new mongoose.Schema(user);
let userModel = mongoose.model('User', userSchema);

module.exports = userModel;