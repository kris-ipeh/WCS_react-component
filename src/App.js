import React, { Component } from 'react';
import Author from './Author';

class App extends Component {

  render() {
    let name = "Chris"
    return (
      <div className="App">
        <Author name={ name } />
      </div>
    );
  }
}

export default App;
