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
import FbEmbeddedComments from './FbEmbeddedComments';

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
        <FbEmbeddedComments appId='300039560455517' apiVersion='v2.9' urL='https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&reply_comment_id=654912701278942'/>
      </div>
    );
  }
}

export default App;
