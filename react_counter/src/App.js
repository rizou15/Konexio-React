import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  constructor() {
    super();
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);


  }
  state = {
    count: 1

  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
        <Counter
          count={this.state.count}
          incrementFn={this.incrementCount}
          decrementFn={this.decrementCount}></Counter>
      </div>
    );
  }
}
export default App;


// let downLimit = 0;
  // let upLimit = 100;
  // limit = downLimit > (0) ? downLimit.stop(onClick) : upLimit.continue(onClick)(100);
