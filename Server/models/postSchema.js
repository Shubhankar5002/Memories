import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema=new Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})
const postMessage=mongoose.model('PostMessage',postSchema)
export default postMessage;