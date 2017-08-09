import React, { Component } from 'react';
import './App.css';

//import FbLogin from './FbLogin';
//import FbLike from './FbLike';
//import FbShare from './FbShare';
//import FbFollow from './FbFollow';
//import FbComments from './FbComments';
//import FbSend from './FbSend';
//import FbSave from './FbSave';
//import FbQuote from './FbQuote';
//import FbPage from './FbPage';
//import FbEmbeddedComments from './FbEmbeddedComments';
//import FbEmbeddedPost from './FbEmbeddedPost';
//import FbEmbeddedVideo from './FbEmbeddedVideo';
import FbInteractiveComments from './FbInteractiveComments';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false
    }
    this.loggedIn = this.loggedIn.bind(this);
    this.onFinishedRendering = this.onFinishedRendering.bind(this);
    this.onCommentCreate = this.onCommentCreate.bind(this);
    this.onCommentRemove = this.onCommentRemove.bind(this);
  }

  loggedIn(res) {
    console.log(res);
    console.log(this);
    //this.setState({loginSuccessful: true});
  }

  onFinishedRendering() {
    console.log('finished rendering')
  }

  onCommentCreate() {
    console.log('comment created');
  }

  onCommentRemove() {
    console.log('comment removed')
  }

  render() {
    return (
      <div className="App">
        <h1>Facebook follow</h1>
        <FbInteractiveComments isNotChild={true} appId='300039560455517' apiVersion='v2.9' urL='https://developers.facebook.com/docs/plugins/comments#configurator' onFinishedRendering={this.onFinishedRendering} onCommentCreate={this.onCommentCreate} onCommentRemove={this.onCommentRemove}/>
      </div>
    );
  }
}

export default App;
