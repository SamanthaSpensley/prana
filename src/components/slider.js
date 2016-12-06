import React, { Component } from 'react';
import InputRange from 'react-input-range';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 4
    };
  }

  handleValueChange(component, value) {
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <InputRange
            maxValue={8}
            minValue={0}
            value={this.state.value}
            onChange={this.handleValueChange.bind(this)}
            className="form-control"
          />
        </div>
      </form>

    );
  }
}
