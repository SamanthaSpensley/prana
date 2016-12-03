import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSequences } from '../actions/index';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class SequenceList extends Component {
  componentWillMount() {
    console.log(this.props.fetchSequences());
  }

  renderList() {
    // map over sequences array and return an <li> for each sequence
    return this.props.sequences.map((sequence) => {
      return (
        <div>
          <li key={ sequence.id } className="list-group-item sequence">
            <Link to={ "breathers/" + sequence.id } className="btn btn-block">{ sequence.title }</Link>
            {/* <FontAwesome name="fa fa-angle-down" aria-hidden="true" /> */}
            <div>
              <hr/>
              <h5>{ sequence.description }</h5>
              <h3>Inhale: { sequence.inhale } counts</h3>

              { sequence.initialHold > 0 &&
                <h3>
                  Hold: { sequence.initialHold } counts
                </h3>
              }
              <h3>Exhale: { sequence.exhale } counts</h3>
              { sequence.secondaryHold > 0 &&
                <h3>Hold: { sequence.secondaryHold } counts</h3>
              }
            </div>
        </li>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="sequence-list">
        <div className="container col-md-8 col-md-offset-2">
          <h1>Select a Breather:</h1>
          <ul className="list-group">
            {this.renderList()}
          </ul>
          <Link to={"/"} className="btn btn-danger">Peace out (back to home) <i className="fa fa-hand-peace-o" aria-hidden="true"></i></Link>
        </div>
      </div>
    );
  }
}

// takes the application state; whatever is returned will show up inside SequenceList
// the object returned is available as this.props
function mapStateToProps(state) {
  return { sequences: state.sequences.all }; //state.sequences references piece of state 'sequences' from reducers/index.js
}

export default connect(mapStateToProps, { fetchSequences: fetchSequences })(SequenceList);
