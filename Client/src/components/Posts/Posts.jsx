import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './Style.jsx'
const Posts =function (){
    const classes=useStyles();
    const posts = useSelector((state)=>state.posts);
    console.log(posts);
    return(
        <>
        <h1>Posts</h1>
        <Post/>
        <Post/>
        </>
    )
}
export default Posts;