import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
  }


  render() {
    return (
      <li style={{ backgroundColor: this.props.counter.color }} onClick={() => this.props.countUp(this.props.counter)}>
        {this.props.counter.id}-({this.props.counter.count})
      </li>
    );
  }
}

export default App;
