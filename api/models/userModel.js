const mongoose = require('mongoose');
// const { postSchema } = require('./postModel');
const postSchema = mongoose.model('Post').schema;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  likedPosts: [postSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  userSchema
};