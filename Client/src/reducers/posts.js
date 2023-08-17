export default (post=[], action) =>{
    switch (action.type) {
        case 'UPDATE':
            return (post.map((post)=>post._id===action.payload._id ? action.payload : post))
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE_POST':
            return [...post,action.payload]
        default:
            return post;
    }
}