import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSequence } from '../actions/index';
import { Link } from 'react-router';
import Slider from './slider';

class SequenceShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.state = {};
    this.state.sequence = this.props.fetchSequence(this.props.params.id).payload;
  }

  render() {
    console.log("this is this.props.sequence:", this.state.sequence);
    return (
      <div className="sequence-list">
        <div className="container col-xs-12 col-md-8 col-md-offset-2 float-none">
          <div className="flex">
            <h1>{ this.state.sequence.title }</h1>
            <Link to={ "overview/" } className="btn btn-lg btn-breathe">Breathe On</Link>
          </div>
          <div className="sequence-customize">
            <h3>Customize Your Breather:</h3>
            <h4>Inhale: { this.state.sequence.inhale }</h4>
            <Slider />
            {/* <input type="range" min="1" max="8" value="4" id="fader" step="1" /> */}
            <h4>Exhale: { this.state.sequence.exhale }</h4>
            {/* <input type="range" min="1" max="8" value="4" id="fader" step="1" /> */}
          </div>
          <Link to={"/breathers"} className="btn btn-lg">Back to Breathers</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sequence: state.sequences.sequence }
}

export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceShow);
