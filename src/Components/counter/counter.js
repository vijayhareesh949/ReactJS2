import React, { Component } from 'react';

import Childern from '../childcomponents/child';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = (data) => {
    this.setState({
      count: this.state.count+data
    });
  };

  render() {
    return (
      <>
        <h3>Counter</h3>
        <h3>{this.state.count}</h3>
        <Childern handleIncrementMethod={this.handleIncrement} />
      </>
    );
  }
}

export default Counter;
