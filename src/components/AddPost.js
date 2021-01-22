import React from 'react'
import { addPost, resetPost } from '../redux/action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
class AddPost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:''
        }
    }
    titleHandler = (title)=>{
        this.setState({title})
    }
    componentDidMount(){
        this.props.reset();
    }
    bodyHandler = (body)=>{
        this.setState({body})
    }
    componentWillReceiveProps(newProps){
        if(newProps.added){
            this.setState({title:'',body:''})
        }
    }
    submit = (e)=>{
        e.preventDefault();
        this.props.addPost({...this.state})

    }
    render(){
        return(
            <div className="container">
                <form className="add-post">
                    <div className="form-group fg">
                        <label>Title</label>
                        <input value={this.state.title} onChange={e=>this.titleHandler(e.target.value)} className="form-control" placeholder="Post Title"></input>
                    </div>
                    <div className="form-group fg">
                        <label>Body</label>
                        <textarea value={this.state.body} onChange={e=>this.bodyHandler(e.target.value)} className="form-control" placeholder="Post Body"></textarea>
                    </div>
                    <div className="form-group fg fgbtn">
                        <button className="btn btn-primary" onClick={(e)=>this.submit(e)}>Add Post</button>
                    </div>
                    {this.props.adding && <p>Adding..</p>}
                    {this.props.added && <p>New Post Added</p>}
                    <Link to="/posts">All Posts</Link>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addPost: (post) => {
            dispatch(addPost(post));
        },
        reset:()=>{
            dispatch(resetPost());
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        adding: state.adding,
        added: state.added
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddPost);