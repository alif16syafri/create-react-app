import React, { Component } from 'react';
import Button from './components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React App Customized</h2>
        </div>
        <Button />
      </div>
    );
  }
}

export default App;