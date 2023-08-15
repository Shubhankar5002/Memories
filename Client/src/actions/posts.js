import * as api from '../api';

export const getPost=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchPost();
        dispatch({type:'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error.message);   
    }
}
export const createpost=(post)=>async(dispatch)=>{
    try {
        console.log(post);
        const {data}=await api.createpost(post);
        dispatch({type:'CREATE_POST',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}
