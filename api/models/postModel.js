const mongoose = require('mongoose');
const { commentSchema }  = require('./commentModel');

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  likes: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema],
});

const Post = mongoose.model('Post', postSchema);

module.export = {
  postSchema,
  Post,
};