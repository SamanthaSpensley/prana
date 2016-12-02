import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchSequences } from '../actions/index';

// takes the application state; whatever is returned will show up inside SequenceList
// the object returned is available as this.props
function mapStateToProps(state) {
  return { sequences: state.sequences.all };//state.sequences references piece of state 'sequences' from reducers/index.js
}

class SequenceList extends Component {
  componentWillMount() {
    this.props.fetchSequences()
  }

  renderList() {
    // map over sequences array and return an <li> for each sequence
    return this.props.sequences.map((sequence) => {
      return (
        <li key={sequence.id} className="list-group-item" >
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
        <Link to={"/"} className="btn btn-danger">Peace out</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchSequences: fetchSequences })(SequenceList);
