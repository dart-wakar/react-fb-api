import React, { Component } from 'react';
import './App.css';

import FbLogin from './FbLogin';

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
    this.setState({loginSuccessful: true});
  }

  render() {
    return (
      <div className="App">
        <h1>Facebook login</h1>
        <FbLogin appId='300039560455517' apiVersion='v2.9' onLoginSuccessful={this.loggedIn}/>
      </div>
    );
  }
}

export default App;
