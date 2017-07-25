import React, { Component } from 'react';
import './App.css';

import FbLogin from './FbLogin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Facebook login</h1>
        <FbLogin />
      </div>
    );
  }
}

export default App;
