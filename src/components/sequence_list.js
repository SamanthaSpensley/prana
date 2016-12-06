import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSequences } from '../actions/index';
import { Link } from 'react-router';

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
            <Link to={ "breathers/" + sequence.id } className="link flex">{ sequence.title }</Link>
            {/* <FontAwesome name="fa fa-angle-down" aria-hidden="true" /> */}
            <div>
              <hr/>
              <h5>{ sequence.description }</h5>
              <h4>Inhale: { sequence.inhale } counts</h4>

              { sequence.initialHold > 0 &&
                <h4>
                  Hold: { sequence.initialHold } counts
                </h4>
              }
              <h4>Exhale: { sequence.exhale } counts</h4>
              { sequence.secondaryHold > 0 &&
                <h4>Hold: { sequence.secondaryHold } counts</h4>
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
        <div className="container col-xs-12 col-md-8 col-md-offset-2 float-none">
          <h1>Select a Breather:</h1>
          <ul className="list-group">
            {this.renderList()}
          </ul>
          <Link to={"/"} className="btn btn-md">Peace out (home)</Link>
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
