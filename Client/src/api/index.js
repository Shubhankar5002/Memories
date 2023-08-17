import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPost= () => axios.get(url);
export const createpost=(post) => axios.post(url,post);
export const updatedPost=(id,updatedPost)=> axios.patch(`${url}/${id}`,updatedPost);