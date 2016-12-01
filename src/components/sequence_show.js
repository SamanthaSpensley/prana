import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    sequence: state.activeSequence
  };
}

class SequenceShow extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.sequence.title}</h2>
        {/* add animated image component */}
        <h2>BREATH IMAGE</h2>
        <Link className="btn btn-sm btn-danger">peace out <i class="fa fa-hand-peace-o" aria-hidden="true"></i></Link>
      </div>
    )
  }
}

export default connect(mapStateToProps)(SequenceShow);
