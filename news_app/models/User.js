const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['reader', 'writer', 'editor', 'admin'],
        default: 'reader',
    },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
