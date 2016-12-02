import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSequence } from '../actions/index';
import { Link } from 'react-router';

class SequenceShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.state = {};
    this.state.sequence = this.props.fetchSequence(this.props.params.id).payload;
  }

  render() {
    // if (!this.props.sequence) {
    //   return <div>Loading...</div>
    // }
    console.log("this is this.props.sequence:", this.state.sequence);
    return <div>
      Show sequence { this.state.sequence.title }
    </div>
  }
}

function mapStateToProps(state) {
  return { sequence: state.sequences.sequence }
}

export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceShow);
