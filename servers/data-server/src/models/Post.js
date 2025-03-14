import { model, Schema, Types } from "mongoose";

const postSchema = new Schema({
    text: {
        type: String
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: String,
    }],
    likes: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
},
    { timestamps: true }
)

const Post = model('Post', postSchema);

export default Post;