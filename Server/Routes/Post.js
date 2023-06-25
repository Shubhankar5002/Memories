import  Express  from "express";
const router = Express.Router();

router.get('/',(req,res)=>{
    res.send('post Created successfully')
})

export default router;
