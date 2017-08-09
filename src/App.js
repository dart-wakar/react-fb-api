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
//import FbInteractiveComments from './FbInteractiveComments';
import FbInteractiveLike from './FbInteractiveLike';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false
    }
    this.loggedIn = this.loggedIn.bind(this);
    this.onFinishedRendering = this.onFinishedRendering.bind(this);
    this.onLikeSuccessful = this.onLikeSuccessful.bind(this);
    this.onUnlikeSuccessful = this.onUnlikeSuccessful.bind(this);
  }

  loggedIn(res) {
    console.log(res);
    console.log(this);
    //this.setState({loginSuccessful: true});
  }

  onFinishedRendering() {
    console.log('finished rendering')
  }

  onLikeSuccessful(uRL,htmlElement) {
    console.log('liked');
    console.log(uRL);
    console.log(htmlElement);
  }

  onUnlikeSuccessful(uRL,htmlElement) {
    console.log('unliked')
    console.log(uRL);
    console.log(htmlElement);
  }

  render() {
    return (
      <div className="App">
        <h1>Facebook follow</h1>
        <FbInteractiveLike isNotChild={true} appId='300039560455517' apiVersion='v2.9' urL='https://developers.facebook.com/docs/plugins/' onFinishedRendering={this.onFinishedRendering} onLikeSuccessful={this.onLikeSuccessful} onUnlikeSuccessful={this.onUnlikeSuccessful}/>
      </div>
    );
  }
}

export default App;
