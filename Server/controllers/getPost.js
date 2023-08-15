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
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        console.log('error:',error.message);
        // res.status(409).json({ message: error.message });
    }
}