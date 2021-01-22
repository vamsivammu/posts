import axios from 'axios'
export const NEW_POST = 'NEW_POST';
export const FETCHED_POSTS = 'FETCHED_POSTS';
export const FETCHING_POSTS = 'FETCHING_POSTS';
export const ADDING_POST = 'ADDING_POST';
export const POST_ADDED = 'POST_ADDED';
export const RESET_POST = 'RESET_POST';
export const addPost = (content)=>{
    return dispatch=>{
        dispatch(addingPost());
        setTimeout(()=>{
            dispatch(postAdded(content)); 
        },2000)
    }
}

export const fetchPosts = ()=>{
    console.log("fetch posts")
    return dispatch=>{
        dispatch(fetchingPosts());
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            let posts = []
            res.data.forEach(row=>{
                let {title,body} = row;
                posts.push({title,body});
            })
            dispatch(fetchedPosts(posts))
        })
    }
}

export const fetchingPosts = ()=>{
    return {
        type:FETCHING_POSTS
    }
}

export const addingPost = ()=>{
    return {
        type:ADDING_POST
    }
}

export const resetPost = ()=>{
    return {
        type:RESET_POST
    }
}

export const fetchedPosts = (content)=>{
    return {
        type:FETCHED_POSTS,
        payload:content
    }
}

export const postAdded = (content)=>{
    return {
        type:POST_ADDED,
        payload:content
    }
}