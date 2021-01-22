import React from 'react';

export default class Post extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="col post">
                <div className="post-title">
                    {this.props.data.title}
                </div>
                <div className="post-body">
                    {this.props.data.body}
                </div>
            </div>
        )
    }

}