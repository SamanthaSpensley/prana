import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class SequenceShow extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.sequence.title}</h2>
        <h2>BREATH IMAGE</h2>
        <button className="btn btn-sm btn-danger">peace out <i class="fa fa-hand-peace-o" aria-hidden="true"></i></button>
      </div>
    )
  }
}
