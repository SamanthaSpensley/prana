import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSequence } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

function mapStateToProps(state) {
  return {
    sequences: state.sequences
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSequence: selectSequence}, dispatch)
}

class SequenceList extends Component {
  renderList() {
    return this.props.sequences.map((sequence) => {
      return (
        <li
          key={sequence.id}
          onClick={() => this.props.selectSequence(sequence)}
          className="list-group-item" >
          <Link to={"breathers/" + sequence.id} className="btn btn-block">{sequence.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-12">
          {this.renderList()}
        </ul>
        <Link to={"/"} className="btn">Peace out</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SequenceList);
