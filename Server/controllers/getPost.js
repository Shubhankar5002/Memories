import PostMessage from '../models/postSchema.js';
export const getPost = async (req, res) => {
    try{
    const postmessage=await PostMessage.find();
    console.log(postmessage);
    res.status(200).json(postmessage)
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}
export const createPost = async (req,res) => {
    res.send()
}