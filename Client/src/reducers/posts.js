import {FETCH_ALL,CREATE_POST,UPDATE,DELETE,LIKE} from '../constant/actionType';
export default (post=[], action) =>{
    switch (action.type) {
        case DELETE:
            return post.filter((post) => post._id !== action.payload);
        case UPDATE:
            return (post.map((post)=>post._id===action.payload._id ? action.payload : post));
        case LIKE:
                return (post.map((post)=>post._id===action.payload._id ? action.payload : post));
        case FETCH_ALL:
            return action.payload;
        case CREATE_POST:
            return [...post,action.payload]
        default:
            return post;
    }
}