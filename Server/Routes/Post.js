import  Express  from "express";
import {getPost,createPost, updatePost, deletePost,likePost} from "../controllers/getPost.js"
const router = Express.Router();

router.get('/',getPost);
router.post('/',createPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likepost',likePost);
export default router;
