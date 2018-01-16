const mongoose = require('mongoose');
const { commentSchema }  = require('./commentModel');

const postSchema = new mongoose.Schema({
    text: { type: String, required: true },
    likes: Number,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [CommentSchema],
});

const Post = mongoose.model('Post', postSchema);

module.export = {
    postSchema,
    Post,
};