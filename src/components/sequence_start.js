import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSequence } from '../actions/index';
import { Link } from 'react-router';

class SequenceStart extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.state = {};
    this.state.sequence = this.props.fetchSequence(this.props.params.id).payload;
  }

  render() {
    console.log("this is this.props.sequence in START:", this.state.sequence);
    return(

      <div className="sequence-start">
        <div className="container flex">
          <div className="container-start">
            <div className="octagon shape"></div>
            <div className="heptagon shape"></div>
            <div className="hexagon shape"></div>
            <div className="pentagon shape"></div>
            <div className="square shape"></div>
            <div className="triangle shape"></div>
          </div>

          {/* <h1>Hello!!!</h1>
          <div className="breath">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div> */}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sequence: state.sequences.sequence }
}

export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceStart);
