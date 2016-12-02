import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSequence } from '../actions/index';

function mapStateToProps(state) {
  return { sequence: state.sequences.sequence }
}

class SequenceShow extends Component {
  componentWillMount() {
    this.props.fetchSequence(this.props.params.id);
  }

  render() {
    console.log(this.props.sequence);
    return <div>Show sequence { this.props.params.id }</div>
  }
}

export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceShow);

// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import { fetchSequence } from '../actions/index';
//
// function mapStateToProps(state) {
//   return {
//     sequence: state.sequences.sequence
//   };
// }
//
// class SequenceShow extends Component {
//   static contextTypes = {
//     router: PropTypes.object
//   };
//
//   componentWillMount() {
//     this.props.fetchSequence(this.props.params.id);
//   }
//
//   render() {
//     const { sequence } = this.props;
//     return (
//       <div>
//         <h2>{ sequence.title }</h2>
//         {/* add animated image component */}
//         <h2>BREATH IMAGE</h2>
//         <Link className="btn btn-sm btn-danger">peace out <i class="fa fa-hand-peace-o" aria-hidden="true"></i></Link>
//       </div>
//     )
//   }
// }
//
// export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceShow);
