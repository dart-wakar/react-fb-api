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
import FbEmbeddedVideo from './FbEmbeddedVideo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false
    }
    this.loggedIn = this.loggedIn.bind(this);
  }

  loggedIn(res) {
    console.log(res);
    console.log(this);
    //this.setState({loginSuccessful: true});
  }

  render() {
    return (
      <div className="App">
        <h1>Facebook follow</h1>
        <FbEmbeddedVideo appId='300039560455517' apiVersion='v2.9' urL='https://www.facebook.com/facebook/videos/10153231379946729/'/>
      </div>
    );
  }
}

export default App;
