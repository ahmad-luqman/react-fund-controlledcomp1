import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    value: ''
  }
  updateValue = (value) => {
    this.setState(() => ({
      value: value
    }))
  }
  render() {
    const { value } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={value}
            onChange={(event) => this.updateValue(event.target.value)}
          />
          <p className="echo">Echo:</p>
          <p>
            {
              value === '' 
              ? "This should mirror the text you typed into the input field."
              : this.state.value
            }
          </p>
        </div>
      </div>
    );
  }
}

export default App;
