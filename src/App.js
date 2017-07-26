import React, { Component } from 'react';
import './App.css';

//import FbLogin from './FbLogin';
//import FbLike from './FbLike';
import FbShare from './FbShare';

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
        <h1>Facebook like</h1>
        <FbShare appId='300039560455517' apiVersion='v2.9' urL='https://developers.facebook.com/docs/plugins/'/>
      </div>
    );
  }
}

export default App;
