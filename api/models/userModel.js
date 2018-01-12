const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique:true },
    password: { type: String, required: true},
    likedPosts: [Posts],
});

module.exports = mongoose.model('User', userSchema);