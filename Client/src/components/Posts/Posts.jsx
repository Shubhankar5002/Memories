import Post from './Post/Post'
import useStyles from './Style.jsx'
const Posts =function (){
    const classes=useStyles();
    return(
        <>
        <h1>Posts</h1>
        <Post/>
        <Post/>
        </>
    )
}
export default Posts;