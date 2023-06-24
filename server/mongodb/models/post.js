import mongoose from "mongoose";

const Post = new mongoose.Schema({                  //Schema Defination for DB collections/models
    name : { type: String, required: true },
    prompt : { type: String, required: true },
    photo : { type: String, required: true },
});

const PostSchema =  mongoose.model('Post', Post);   //Creating a collection(similar to table in SQL)

export default PostSchema;