import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {num: 1};

    // This binding is necessary to make `this` work in the callback
    this.addData = this.addData.bind(this);
    this.cutData = this.cutData.bind(this);
  }


  addData() {
    this.setState(prevState => ({
      num:prevState.num+1
    }));
  }

  cutData() {
    this.setState(prevState => ({
      num: prevState.num-1
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <button onClick={this.addData}>
        ADD
        </button>
        &nbsp;{this.state.num}&nbsp;
        <button onClick={this.cutData}>
        CUT
        </button>
    </div>
      </div>
      
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('root'));

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// export default App;
