import React from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchPosts} from '../redux/action'
import Post from './Post';
class Posts extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        return(
            <div className="container">
                {this.props.fetching && <p>Loading...</p>}
                {this.props.fetched && <h2 style={{textAlign:'center'}}>Posts</h2>}
                <Link to="/addpost">Add Post</Link>
                
                {this.props.fetched && this.props.offlinePosts.map(post=><Post data={post}></Post>)}
                {this.props.fetched && this.props.onlinePosts.map(post=><Post data={post}></Post>)}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        onlinePosts: state.onlinePosts,
        offlinePosts: state.offlinePosts,
        fetching:state.fetching,
        fetched:state.fetched
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);