import {NEW_POST,FETCH_POSTS, FETCHING_POSTS, addingPost, ADDING_POST, FETCHED_POSTS, POST_ADDED, RESET_POST} from './action'
const initialState = {
    onlinePosts:[],
    offlinePosts:[],
    fetching:false,
    adding:false,
    fetched:false,
    added:false
}
export default function PostReducer(state=initialState,action){
    switch (action.type){
        case NEW_POST:
            return {...state};
        case FETCHING_POSTS:
            return {...state,fetching:true,fetched:false}
        case ADDING_POST:
            return {...state,adding:true,added:false}
        case FETCHED_POSTS:
            return {...state,onlinePosts:action.payload,fetching:false,fetched:true}
        case POST_ADDED:
            return {...state,offlinePosts:[...state.offlinePosts,...[action.payload]],adding:false,added:true}
        case RESET_POST:
            return {...state,adding:false,added:false}
        default:
            return {...state}
    }
}