import React, { Component } from 'react';

export default class Countdown extends Component {
  getInitialState() {
    return {
      secondsRemaining: 0
    };
  }

  tick() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Seconds Remaining: {this.state.secondsRemaining}</h1>
      </div>
    );
  }
};
