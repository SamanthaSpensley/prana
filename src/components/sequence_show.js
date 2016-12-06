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
      <div className="sequence-show">
        <div className="container col-xs-12 col-md-8 col-md-offset-2 float-none">
          <div className="flex">
            <h1>{ this.state.sequence.title }</h1>
            <h5 className="no-mb">Inhale { this.state.sequence.inhale } counts -
              { this.state.sequence.initialHold > 0 &&
                <span> Hold { this.state.sequence.initialHold } count - </span>
              }
              Exhale { this.state.sequence.exhale } counts
              { this.state.sequence.secondaryHold > 0 &&
                 <span>- Hold { this.state.sequence.secondaryHold } count</span>
              }
            </h5>
            <h5><Link to={"/breathers"}>Customize Your Breather</Link></h5>

            <Link to={ this.state.sequence.id + "/breathe" } className="btn btn-lg btn-breathe">Breathe On</Link>

          {/* <div className="sequence-customize">
            <h3>Customize Your Breather:</h3>
            <h5>Your breath ratio is set to { this.state.sequence.ratio }.</h5>
            <h5>While the ratio will stay the same, use the sliders below to adjust the total duration of your breather, the inhale count or the exhale count.</h5>
            <h4>Inhale: { this.state.sequence.inhale }</h4>
            <Slider />
            <input type="range" min="1" max="8" value="4" id="fader" step="1" />
            <h4>Exhale: { this.state.sequence.exhale }</h4>
            <input type="range" min="1" max="8" value="4" id="fader" step="1" />
          </div> */}
            <div className="flex">
              <Link to={"/breathers"} className="btn btn-md">Back to Breathers</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { sequence: state.sequences.sequence }
}

export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceShow);
