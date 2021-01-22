import React from 'react'
import { connect } from 'react-redux';
import {BrowserRouter, Switch, Route, Redirect,withRouter} from 'react-router-dom'
import './App.css'
import AddPost from './components/AddPost';
import Posts from './components/Posts';
class App extends React.Component{
  render(){
    return (
        <Switch>
          <Route path="/addpost" component={AddPost}></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route path="*" render={()=><Redirect to="/posts"></Redirect>}></Route>
        </Switch>
      
    )
  }
}

export default withRouter(connect()(App));
